import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

const RaGrid = ({ children, ...props }) => (
    <Grid {...props}>{Children.map(children, (child) => cloneElement(child))}</Grid>
);

RaGrid.propTypes = {
    children: PropTypes.node.isRequired,
};

RaGrid.displayName = 'RaGrid';

export default RaGrid;
