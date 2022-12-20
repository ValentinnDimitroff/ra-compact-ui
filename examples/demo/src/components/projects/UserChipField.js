import Avatar from '@material-ui/core/Avatar'
import React from 'react'
import { ChipField } from 'react-admin'

const UserChipField = ({ record, source = 'fullName', ...props }) => {
    return (
        <ChipField
            avatar={
                <Avatar
                    src={record && record.picture}
                    sx={{
                        ...(props.compact
                            ? {
                                  marginLeft: '0px !important',
                              }
                            : undefined),
                    }}
                />
            }
            source={source}
            record={record}
            {...props}
        />
    )
}

export default UserChipField
