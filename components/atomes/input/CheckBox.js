import React from "react";

const CheckBox = (props) => {
  const value = props.value || "";
  const setValue = props.setValue || null;

  return (
    <input
      type="checkbox"
      id="rgpd"
      name="rgpd"
      required
      className="border-dark bg-slate-50 border rounded-lg"
      onChange={(e) => setValue(!value)}
    />
  );
};

export default CheckBox;
