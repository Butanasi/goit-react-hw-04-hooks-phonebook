import { useState } from 'react';
import { Form } from './Components/Form';
import { nanoid } from 'nanoid';
import { ContactList } from './Components/ContactList';
import { Filter } from './Components/Filter';
import style from './App.module.scss';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', '');

  const [filter, setFilter] = useState('');

  const deleteContacts = id => {
    setContacts(prevState => [
      ...prevState.filter(contact => contact.id !== id),
    ]);
  };

  const addContacts = ({ name, number }) => {
    const findReturnName = contacts.find(contact => contact.name === name);

    if (findReturnName) {
      alert('This name is already in the phone book ');
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevState => [...prevState, contact]);
    }
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContacts;
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <Form onAddContacts={addContacts} />
      <h2 className={style.title}>Contacts</h2>
      <Filter value={filter} onChange={e => setFilter(e.target.value)} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContacts}
      />
    </div>
  );
}

export default App;
