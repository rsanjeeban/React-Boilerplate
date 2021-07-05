import React from 'react';

import Button from '.';

export default {
  title: 'SqillUp/atom/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  palette: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  palette: 'secondary',
  label: 'Button',
};

export const Outline = Template.bind({});
Secondary.args = {
  palette: 'outline',
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Button',
};
