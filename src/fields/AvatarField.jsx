import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'
import { useRecordContext } from 'react-admin'

const getOptimizedSrc = (url, size) => `${url}?size=${size}x${size}`

const AvatarField = ({ source, altSource, size, fallback, sx, ...props }) => {
    const record = useRecordContext(props)

    return record ? (
        <Avatar
            src={(record && getOptimizedSrc(record[source], size)) || fallback}
            sx={{
                width: (theme) => theme.spacing(size),
                height: (theme) => theme.spacing(size),
                ...sx,
            }}
            alt={record[altSource]}
            {...props}
        />
    ) : null
}

AvatarField.defaultProps = {
    size: '25',
    source: 'picture',
}

AvatarField.propTypes = {
    source: PropTypes.string,
    altSource: PropTypes.string,
    size: PropTypes.string,
    fallback: PropTypes.string,
    className: PropTypes.string,
}

export default AvatarField
