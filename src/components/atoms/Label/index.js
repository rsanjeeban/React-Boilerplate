import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ htmlFor, labelName, className, style }) => (
        <label htmlFor={htmlFor} style={style} className={className}>
            {labelName}
        </label>
    )

Label.propTypes = {
    htmlFor: PropTypes.string,
    labelName: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape({}),
}

Label.defaultProps = {
    htmlFor: '',
    labelName: '',
    className: '',
    style: {},
}

export default Label
