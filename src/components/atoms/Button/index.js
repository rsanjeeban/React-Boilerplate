/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

const Button = ({ type, label, disabled, palette, ...props }) => {
  const btnClass = classNames({
    'sc-button': true,
    'sc-button--disabled': disabled,
    'sc-button--primary': palette === 'primary',
    'sc-button--outline': palette === 'outline',
    'sc-button--secondary': palette === 'secondary',
  });
  return (
    <button
      type={type || 'button'}
      {...props}
      className={`${btnClass} ${props.className}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  palette: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  palette: 'primary',
  className: '',
  disabled: false,
  type: 'button',
  label: 'Button',
};

export default Button;
