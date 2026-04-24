import React from 'react';

interface FlipUnitProps {
  value: number;
  label: string;
  hasBorder?: boolean;
}

export const ContadorTiempo: React.FC<FlipUnitProps> = ({ value, label, hasBorder = true }) => {
  const formattedValue = value < 10 ? `0${value}` : value;

  return (
    <div className={`flex flex-col items-center px-4 justify-center font-atypewriter ${hasBorder ? 'border-r border-white' : ''}`}>
      <span 
        key={value} 
        className="font-text-2 flex items-center justify-center text-2xl animate-flip"
      >
        {formattedValue}
      </span>
      <span className="font-text-2 text-xs opacity-70">{label}</span>
    </div>
  );
};