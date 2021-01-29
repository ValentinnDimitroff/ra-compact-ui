import React from 'react'
import Grid from '@material-ui/core/Grid'

const RaGrid = ({ children, ...props }) => (
    <Grid {...props}>
        {Children.map(children, (child) => cloneElement(child))}
    </Grid>
)

RaGrid.displayName = "RaGrid";

export default RaGrid