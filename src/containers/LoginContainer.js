import React from 'react'
// import PropTypes from 'prop-types'
import { LoginForm } from 'components'
import { consoleLog } from 'utils/miscUtil'

function LoginContainer() {
    return (
        <div>
            <LoginForm onFormSubmit={(data) => {
                consoleLog(data)
            }}/>
        </div>
    )
}

// LoginContainer.propTypes = {
// }

export default LoginContainer