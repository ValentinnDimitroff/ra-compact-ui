import React, { Children, cloneElement } from 'react'
import Box from '@material-ui/core/Box'

const RaBox = ({ children, ...props }) => {

    return (
        <Box {...props}>
            {Children.map(children, (child) => cloneElement(child))}
        </Box>
    )
}

RaBox.displayName = "RaBox";

export default RaBox
