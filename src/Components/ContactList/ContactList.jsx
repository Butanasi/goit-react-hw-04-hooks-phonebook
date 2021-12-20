import PropTypes from 'prop-types';
import { ElemListContact } from '../ElemListContact';
import style from './ContainerList.module.scss';
export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={style.item}>
        <ElemListContact
          name={name}
          number={number}
          id={id}
          func={onDeleteContact}
        />
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
