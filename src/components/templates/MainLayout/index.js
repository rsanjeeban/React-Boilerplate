import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MainLayout = ({ children }) => (
    <>
      <div>
        {/* Place Here : Admin Header, Sidebar, etc... */}
        {children}
      </div>
    </>
  );

MainLayout.propTypes = {
  children: PropTypes.node,
};
MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;
