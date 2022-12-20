import React from 'react'
import RaBox from './RaBox'
import CompactShowLayout from './CompactShowLayout'

const BoxedShowLayout = (props) => <CompactShowLayout {...props} layoutComponents={[RaBox]} />

BoxedShowLayout.propTypes = {
    ...CompactShowLayout.propTypes,
}

export default BoxedShowLayout
