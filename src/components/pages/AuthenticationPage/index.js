/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {LoginContainer} from 'containers'
// import { Logo } from 'components';
import './style.scss';

function AuthenticationPage() {
  return (
    <div className="sc-authentication">
      {/* <Logo /> */}
      <div className="sc-authentication__form">
        <LoginContainer/>
      </div>
    </div>
  );
}

AuthenticationPage.propTypes = {};

export default AuthenticationPage;
