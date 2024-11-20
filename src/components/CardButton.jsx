// ==================== IMPORTS ===============================================

import PropTypes from 'prop-types';

// ==================== COMPONENT =============================================

const CardButton = ({ icon, label, onClick }) => (
  <button className="flex select-none flex-col items-center p-2" onClick={onClick}>
    <i className={`material-symbols-outlined text-3xl`}>{icon}</i>
    {label && <p className="text-xs">{label}</p>}
  </button>
);

// ==================== PROP TYPES ============================================

CardButton.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

// ==================== EXPORTS ===============================================

export default CardButton;
