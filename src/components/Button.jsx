import React from 'react';

const Button = ({ bgColor, color, size, text, borderRadius }) => (
  <button
    type="button"
    style={{
      backgroundColor: bgColor,
      color,
      borderRadius,
    }}

    className={`text-${size} p-2 hover:drop-shadow-xl`}
  >
    {text}
  </button>
);

export default Button;
