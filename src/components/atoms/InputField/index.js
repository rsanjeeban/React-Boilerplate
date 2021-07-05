/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import PropTypes from 'prop-types';

const InputField = ({
  name,
  value,
  placeholder,
  type,
  onChange,
  onBlur,
  className,
  ...rest
}) => (
  <input
    name={name}
    value={value}
    className={`${className}`}
    placeholder={placeholder}
    type={type}
    onChange={onChange}
    onBlur={onBlur}
    {...rest}
  />
);

InputField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

InputField.defaultProps = {
  name: '',
  value: undefined,
  placeholder: '',
  type: 'text',
  onChange: () => {},
  onBlur: () => {},
  style: {},
  className: 'sc-field__input',
};

export default InputField;
