import React from 'react'
import CompactShowLayout from './CompactShowLayout'

const BoxedShowLayout = (props) => {
    return <CompactShowLayout {...props} layoutComponentName="RaBox" />
}

BoxedShowLayout.propTypes = {
    ...CompactShowLayout.propTypes,
}

export default BoxedShowLayout
