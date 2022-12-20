import React from 'react'
import RaGrid from './RaGrid'
import CompactShowLayout from './CompactShowLayout'

const GridShowLayout = (props) => <CompactShowLayout {...props} layoutComponents={[RaGrid]} />

GridShowLayout.propTypes = {
    ...CompactShowLayout.propTypes,
}

export default GridShowLayout
