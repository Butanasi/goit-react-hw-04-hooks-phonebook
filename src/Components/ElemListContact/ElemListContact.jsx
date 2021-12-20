import PropTypes from 'prop-types';
import style from './ElemListContact.module.scss';

export const ElemListContact = ({ name, number, id, func }) => (
  <>
    <i>{name}:</i>
    <b>{number}</b>

    <button className={style.button} onClick={() => func(id)}>
      Delete
    </button>
  </>
);
ElemListContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
