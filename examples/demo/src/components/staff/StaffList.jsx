import React from 'react'
import { Datagrid, List, TextField } from 'react-admin'

const StaffList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="show">
                <TextField source="full_name" />
            </Datagrid>
        </List>
    )
}

export default StaffList
