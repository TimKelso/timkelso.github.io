import PropTypes from 'prop-types';

const Button = ({ icon, label, onClick }) => (
  <button className="flex select-none flex-col items-center p-2" onClick={onClick} aria-label={label || icon}>
    <i className={`material-symbols-outlined text-3xl`} aria-hidden="true">
      {icon}
    </i>
    {label && <p className="text-xs">{label}</p>}
  </button>
);

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string || '',
  onClick: PropTypes.func.isRequired,
};

export default Button;
