import React from 'react';

import Logo from '.';

export default {
  title: 'SqillUp/atom/Logo',
  component: Logo,
};

const Template = args => <Logo {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
