import React from "react";
import PropTypes from "prop-types";

const TextField = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled,
  checked
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        className={error ? 'form-control mt-2 is-invalid':'form-control mt-2 ' }
      />

    </div>
  );
};

export default TextField;