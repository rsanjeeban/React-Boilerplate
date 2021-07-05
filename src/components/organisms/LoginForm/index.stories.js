import React from 'react';

import LoginForm from '.';

export default {
  title: 'SqillUp/organism/LoginForm',
  component: LoginForm,
};

const Template = args => <LoginForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
