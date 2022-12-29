import React from "react";

const Button = ({ onClick, disabled, symbol, status }) => {
  const nameId = () =>
    symbol === "+" ? `${status}-increment` : `${status}-decrement`;

  return (
    <button
      id={nameId()}
      className="value-change-button"
      onClick={onClick}
      disabled={disabled}
    >
      {symbol}
    </button>
  );
};

export default Button;
