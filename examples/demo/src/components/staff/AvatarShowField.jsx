import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'
import React from 'react'

const MEMBER_AVATAR_DEFAULT = ''
const MEMBER_AVATAR_SIZE = 20

const AvatarShowField = ({ record: { full_name, avatar_url } }) => {
    return (
        <Avatar
            sx={{
                marginBottom: '10px',
                width: (theme) => theme.spacing(MEMBER_AVATAR_SIZE),
                height: (theme) => theme.spacing(MEMBER_AVATAR_SIZE),
                flexShrink: 0,
                flexGrow: 0,
                margin: '0 auto',
            }}
            alt={full_name}
            src={avatar_url || MEMBER_AVATAR_DEFAULT}
        />
    )
}

AvatarShowField.propTypes = {
    record: PropTypes.object,
}

export default AvatarShowField
