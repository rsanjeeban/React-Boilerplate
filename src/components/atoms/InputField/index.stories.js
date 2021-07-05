import React from 'react';

import InputField from '.';

export default {
  title: 'SqillUp/atom/InputField',
  component: InputField,
};

const Template = args => <InputField {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
