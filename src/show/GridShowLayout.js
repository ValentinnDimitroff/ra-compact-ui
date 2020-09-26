import React from 'react'
import PropTypes from 'prop-types'
import CompactShowLayout, { compactShowLayoutPropTypes } from './CompactShowLayout'

const GridShowLayout = props => {
    return (
        <CompactShowLayout
            {...props}
            layoutComponentTypeCheck={
                (field) => (
                    field.type == undefined ||
                    field.type.displayName !== 'WithStyles(ForwardRef(Grid))')}
        />
    )
}

GridShowLayout.propTypes = {
    ...compactShowLayoutPropTypes
}

export default GridShowLayout
