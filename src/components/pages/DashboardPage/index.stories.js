import { MainLayout } from 'components';
import React from 'react';

import DashboardPage from '.';

export default {
  title: 'SqillUp/pages/DashboardPage',
  component: DashboardPage,
};

const Template = args => (
  <MainLayout>
    <DashboardPage {...args} />
  </MainLayout>
);

export const Normal = Template.bind({});
Normal.args = {};
