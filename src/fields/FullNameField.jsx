import PropTypes from 'prop-types'
import React from 'react'
import AvatarField from './AvatarField'

// eslint-disable-next-line arrow-body-style
const FullNameField = ({ record, size }) => {
    return record ? (
        <div sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
            <AvatarField
                sx={{
                    marginRight: (theme) => theme.spacing(1),
                    marginTop: (theme) => -theme.spacing(0.5),
                    marginBottom: (theme) => -theme.spacing(0.5),
                }}
                size={size}
                record={record}
            />
            {`${record.firstName} ${record.lastName}`}
        </div>
    ) : null
}

FullNameField.propTypes = {
    record: PropTypes.object,
    // source: PropTypes.string,
    // label: PropTypes.string,
    size: PropTypes.string,
}

FullNameField.defaultProps = {
    // source: 'firstName',
    // label: 'resources.customers.fields.name',
}

export default FullNameField
