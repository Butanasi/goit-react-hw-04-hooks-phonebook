import { useState } from 'react';
import style from './Form.module.scss';
import PropTypes from 'prop-types';

export function Form({ onAddContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    onAddContacts({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>Name</label>
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={style.label}>Tel</label>
        <input
          className={style.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
Form.propTypes = {
  onAddContacts: PropTypes.func.isRequired,
};

// export class Form extends Component {
//   static propTypes = {
//     onAddContacts: PropTypes.func.isRequired,
//   };
//   state = {
//     name: '',
//     number: '',
//   };
//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     this.props.onAddContacts({ name, number });
//     this.resetForm();
//   };
//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     const { name, number } = this.state;
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label className={style.label}>Name</label>
//           <input
//             className={style.input}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             value={name}
//             onChange={this.handleChange}
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />

//           <label className={style.label}>Tel</label>
//           <input
//             className={style.input}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />

//           <button className={style.button} type="submit">
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }
