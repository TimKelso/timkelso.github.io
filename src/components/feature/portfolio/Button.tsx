import React from 'react';

interface ButtonProps {
  icon: string;
  label?: string;
  onClick: () => void;
}

const Button = ({ icon, label, onClick }: ButtonProps): JSX.Element => (
  <button className="flex cursor-pointer flex-col p-2 select-none" onClick={onClick} aria-label={label || icon}>
    <i className="material-symbols-outlined" aria-hidden="true">
      <span className="text-3xl">{icon}</span>
    </i>
    {label && <p className="text-xs font-semibold">{label}</p>}
  </button>
);

export default Button;
