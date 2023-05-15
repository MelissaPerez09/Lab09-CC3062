import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

function Button({ value }) {
    return (
        <button type="button" className="button">
            {value}
        </button>
    )
}

Button.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default Button
