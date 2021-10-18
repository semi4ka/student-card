import React from "react";
import PropTypes from "prop-types";

const InputField = ({ type, label, name, onChange, value, error }) => {
    return (
        <div className="input-field col s12">
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                className={error ? "invalid" : "validate"}
                onChange={onChange}
            />
            <label htmlFor={name}>{label}</label>
            <span
                className="helper-text"
                data-error={error}
                data-success="right"
            ></span>
        </div>
    );
};
InputField.defaultProps = {
    type: "text"
};

InputField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string
};

export default InputField;
