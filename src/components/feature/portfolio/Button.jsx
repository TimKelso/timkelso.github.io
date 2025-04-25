import PropTypes from 'prop-types';

const Button = ({ icon, label, onClick }) => (
  <button className="flex cursor-pointer flex-col p-2 select-none" onClick={onClick} aria-label={label || icon}>
    <i className="material-symbols-outlined" aria-hidden="true">
      <span className="text-3xl">{icon}</span>
    </i>
    {label && <p className="text-xs font-semibold">{label}</p>}
  </button>
);

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string || '',
  onClick: PropTypes.func.isRequired,
};

export default Button;
