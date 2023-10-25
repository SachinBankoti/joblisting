import React from "react";

const InputField = ({ label, type, name, id, ...props }) => {
  return (
    <div className="form-group mt-2">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        required
        autoComplete="off"
        id={id}
        name={name}
        {...props}
      />
    </div>
  );
};

export default InputField;
