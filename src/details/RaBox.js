import React, { Children, cloneElement } from 'react'
import Box from '@material-ui/core/Box'

const RaBox = ({ children, props }) => (
    <Box {...props}>
        {Children.map(children, (ch, index) => cloneElement(ch, { key: index }))}
    </Box>
)

RaBox.displayName = "RaBox";

export default RaBox
