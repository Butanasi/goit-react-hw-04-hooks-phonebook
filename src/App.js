import { useState, useEffect } from 'react';
import { Form } from './Components/Form';
import { nanoid } from 'nanoid';
import { ContactList } from './Components/ContactList';
import { Filter } from './Components/Filter';
import style from './App.module.scss';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contact = localStorage.getItem('contacts');
    const parseContact = JSON.parse(contact);
    if (parseContact) {
      setContacts(parseContact);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
