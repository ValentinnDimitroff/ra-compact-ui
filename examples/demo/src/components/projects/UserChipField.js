import React from 'react'
import { ChipField } from 'react-admin'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles';

const styles = {
    root: props => props.compact ? ({
        marginLeft:  "0px !important"
    }) : undefined
}

const useStyles = makeStyles(styles);

const UserChipField = ({ record, source = "fullName", ...props }) => {
    const classes = useStyles(props);

    return (
        <ChipField
            avatar={
                <Avatar
                    src={record && record.picture}
                    classes={{
                        root: classes.root
                    }}
                />}
            source={source}
            record={record}
            {...props}
        />
    )
}

export default UserChipField