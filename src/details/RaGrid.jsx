import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const RaGrid = ({
    children,
    ...props
}) => (
    <Grid {...props}>
        {Children.map(children, (child) => cloneElement(child))}
    </Grid>
);

RaGrid.propTypes = {
    children: PropTypes.node.isRequired,
};

RaGrid.displayName = 'RaGrid';

export default RaGrid;
