/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router';
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

// it is temperory line. Login status will be retrives from store
const loginStatus = true;

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            loginStatus?
                <Layout>
                    <Component {...props} />
                </Layout>
                :
                <Redirect to={{
                    pathname: '/login',
                    // eslint-disable-next-line react/prop-types
                    state: { from: props.location },
                }}
                />
        )}
    />

)
PrivateRoute.propTypes = propTypes;
PrivateRoute.defaultProps = defaultProps;

export default PrivateRoute;
