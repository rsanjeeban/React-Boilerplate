import React from 'react';

import AuthenticationPage from '.';

export default {
  title: 'SqillUp/pages/AuthenticationPage',
  component: AuthenticationPage,
};

const Template = args => <AuthenticationPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
