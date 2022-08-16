import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

const ShowSplitter = ({
    leftSide,
    leftSideProps: { component: LeftContainer = Card, ...restLeftProps },
    rightSide,
    rightSideProps: { component: RightContainer = Card, ...restRightProps },
    ...props
}) => (
    <Grid container spacing={4}>
        <Grid item {...restLeftProps}>
            <LeftContainer>{cloneElement(leftSide, props)}</LeftContainer>
        </Grid>
        <Grid item {...restRightProps}>
            <RightContainer>{cloneElement(rightSide, props)}</RightContainer>
        </Grid>
    </Grid>
)

ShowSplitter.defaultProps = {
    leftSideProps: {
        lg: 4,
        md: 6,
        xl: 4,
        xs: 12,
        component: Card,
    },
    rightSideProps: {
        lg: 8,
        md: 6,
        xl: 8,
        xs: 12,
        component: Card,
    },
}

ShowSplitter.propTypes = {
    leftSide: PropTypes.element,
    leftSideProps: PropTypes.object,
    rightSide: PropTypes.element,
    rightSideProps: PropTypes.object,
}

export default ShowSplitter
