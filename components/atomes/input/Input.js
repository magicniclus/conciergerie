import React, { useState } from "react";

const Input = (props) => {
  const placeholder = props.placeholder || "";
  const value = props.value || "";
  const setValue = props.setValue || null;

  return (
    <input
      placeholder={placeholder}
      className="border-dark border rounded-lg px-4 py-2 min-w-full"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
