import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const MEMBER_AVATAR_DEFAULT = ''
const MEMBER_AVATAR_SIZE = 20

const useStyles = makeStyles((theme) => ({
    avatar: {
        marginBottom: '10px',
        width: theme.spacing(MEMBER_AVATAR_SIZE),
        height: theme.spacing(MEMBER_AVATAR_SIZE),
        flexShrink: 0,
        flexGrow: 0,
        margin: '0 auto',
    },
}))

const AvatarShowField = ({ record: { full_name, avatar_url } }) => {
    const classes = useStyles()

    return <Avatar className={classes.avatar} alt={full_name} src={avatar_url || MEMBER_AVATAR_DEFAULT} />
}

AvatarShowField.propTypes = {
    record: PropTypes.object
}

export default AvatarShowField
