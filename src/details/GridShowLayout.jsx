import React from 'react'
import CompactShowLayout from './CompactShowLayout'

const GridShowLayout = (props) => <CompactShowLayout {...props} layoutComponentName="RaGrid" />

GridShowLayout.propTypes = {
    ...CompactShowLayout.propTypes,
}

export default GridShowLayout
