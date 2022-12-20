import React from 'react'
import { Avatar } from '@mui/material'
import { ChipField, useRecordContext } from 'react-admin'

const UserChipField = ({ source = 'fullName', compact }) => {
    const record = useRecordContext()

    return (
        <ChipField
            avatar={
                <Avatar
                    src={record?.avatar_url}
                    sx={{
                        ...(compact
                            ? {
                                  marginLeft: '0px !important',
                              }
                            : undefined),
                    }}
                />
            }
            source={source}
        />
    )
}

export default UserChipField
