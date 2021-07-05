/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Label, InputField } from 'components';
import './style.scss';

const Field = ({
  name,
  label,
  value,
  placeholder,
  type,
  onChange,
  onBlur,
  className,
  error,
  ...rest
}) => (
  <div className={`${className.containerClass} sc-field__container`}>
    <Label
      htmlFor={name}
      className={`${className.labelClass} sc-field__label`}
      labelName={label}
    />
    <InputField
      name={name}
      value={value}
      placeholder={placeholder}
      type={type}
      className={`${className.inputClass}  sc-field__input ${
        error && 'sc-field__input--error'
      }`}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
    />
    {error && (
      <div className={`${className.errorClass}  sc-field__error`}>{error} </div>
    )}
  </div>
);

Field.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.shape({}),
  error: PropTypes.string,
  className: PropTypes.shape({
    inputClass: PropTypes.string,
    labelClass: PropTypes.string,
    containerClass: PropTypes.string,
    errorClass: PropTypes.string,
  }),
};

Field.defaultProps = {
  name: '',
  label: '',
  value: undefined,
  placeholder: '',
  type: '',
  onChange: () => {},
  onBlur: () => {},
  style: {},
  error: null,
  className: {
    inputClass: '',
    labelClass: '',
    containerClass: '',
    errorClass: '',
  },
};

export default Field;
