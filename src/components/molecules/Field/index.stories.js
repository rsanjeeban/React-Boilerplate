import React from 'react';

import Field from '.';

export default {
  title: 'SqillUp/molecule/Field',
  component: Field,
};

const Template = args => <Field {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'Label',
  placeholder: 'Placekolder goes here..',
};

export const TextInserted = Template.bind({});
TextInserted.args = {
  label: 'Label',
  value: 'Text entered',
  placeholder: 'Placekolder goes here..',
};

export const ValidationFailed = Template.bind({});
ValidationFailed.args = {
  label: 'Label',
  error: 'Some validation failed',
  placeholder: 'Placekolder goes here..',
};
