import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'

const RaBox = ({ children, ...props }) => (
    <Box {...props}>{Children.map(children, (child) => cloneElement(child))}</Box>
)

RaBox.propTypes = {
    children: PropTypes.node.isRequired,
}

RaBox.displayName = 'RaBox'

export default RaBox
