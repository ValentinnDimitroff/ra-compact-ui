import PropTypes from 'prop-types'
import React from 'react'
import AvatarField from './AvatarField'

const FullNameField = ({ size, ...props }) => {
    const record = useRecordContext(props)

    return record ? (
        <div sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
            <AvatarField
                sx={{
                    marginRight: (theme) => theme.spacing(1),
                    marginTop: (theme) => -theme.spacing(0.5),
                    marginBottom: (theme) => -theme.spacing(0.5),
                }}
                size={size}
            />
            {`${record.firstName} ${record.lastName}`}
        </div>
    ) : null
}

FullNameField.propTypes = {
    record: PropTypes.object,
    size: PropTypes.string,
}

export default FullNameField
