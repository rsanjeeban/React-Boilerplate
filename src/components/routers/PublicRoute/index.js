/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Route } from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object,
    ]).isRequired,
    layout: PropTypes.elementType.isRequired,
};

const defaultProps = {
};

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            <Layout {...rest}>
                <Component {...props} />
            </Layout>
        )}
    />
);

PublicRoute.propTypes = propTypes;
PublicRoute.defaultProps = defaultProps;

export default PublicRoute;
