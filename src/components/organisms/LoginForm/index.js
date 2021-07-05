/* eslint-disable no-nested-ternary */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Field, Button, Translate } from 'components';
import './style.scss';

const LoginForm = ({ onFormSubmit }) => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();
  const onSubmit = data => onFormSubmit(data);
  return (
    <div>
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="sc-login-form__container"
    >
      <h4 className="sc-login-form__header">{Translate({ content: 'login.title' })}</h4>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Field
            type="email"
            onChange={onChange}
            onBlur={onBlur}
            name="email"
            value={value}
            placeholder={Translate({ content: 'login.email' })}
            label={Translate({ content: 'login.email' })}
            autoFocus
            error={
              errors.email
                ? errors?.email?.type === 'required'
                  ? Translate({
                      content: 'validator.isRequired',
                      params: { name: Translate({ content: 'login.email' }) },
                    })
                  : errors.email.message
                : null
            }
          />
        )}
        type="email"
        name="email"
        rules={{
          required: true,
          pattern: {
            value: /\S+@\S+.\S+/,
            message: Translate({
              content: 'validator.isNotValid',
              params: { name: Translate({ content: 'login.email' }) },
            }),
          },
        }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Field
            onChange={onChange}
            name="Password"
            type="password"
            onBlur={onBlur}
            value={value}
            placeholder={Translate({ content: 'login.password' })}
            label={Translate({ content: 'login.password' })}
            error={
              errors.password
                ? errors?.password?.type === 'required'
                  ? Translate({
                      content: 'validator.isRequired',
                      params: {
                        name: Translate({ content: 'login.password' }),
                      },
                    })
                  : errors.password.message
                : null
            }
          />
        )}
        type="password"
        name="password"
        rules={{
          required: true,
        }}
      />
      <Button type="submit" label={Translate({ content: 'login.login' })} />
    </form>
    </div>
  );
};

LoginForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
LoginForm.defaultProps = {
  onFormSubmit: () => {},
};

export default LoginForm;
