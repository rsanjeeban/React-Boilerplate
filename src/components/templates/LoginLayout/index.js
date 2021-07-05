import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

export const LoginLayout = ({ children }) => <>{children}</>;

LoginLayout.propTypes = {
  children: PropTypes.node,
};
LoginLayout.defaultProps = {
  children: null,
};

// const mapStateToProps = () => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps,mapDispatchToProps)(LoginLayout);
export default LoginLayout;