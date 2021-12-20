import PropTypes from 'prop-types';
import style from './Filter.module.scss';

export const Filter = ({ value, onChange }) => (
  <>
    <label className={style.label}>Find contacts by name</label>
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
