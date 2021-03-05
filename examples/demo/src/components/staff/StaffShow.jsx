import React from 'react'
import { ArrayField, ChipField, Show, SimpleShowLayout, SingleFieldList, Tab, TabbedShowLayout, TextField } from 'react-admin'
import { ShowSplitter } from 'ra-compact-ui'
import AvatarShowField from './AvatarShowField'

const StaffShow = props => {
    return (
        <Show
            {...props}
            component="div"
        >
            <ShowSplitter
                // leftSideProps={{
                //     md: 4,
                //     component: 'div'
                // }}
                // rightSideProps={{
                //     md: 8
                // }}
                leftSide={
                    <SimpleShowLayout>
                        <AvatarShowField />
                        <TextField source="full_name" />
                        <TextField source="email" />
                        <ArrayField source="skills">
                            <SingleFieldList>
                                <ChipField source="name" />
                            </SingleFieldList>
                        </ArrayField>
                    </SimpleShowLayout>
                }
                rightSide={
                    <TabbedShowLayout>
                        <Tab label="Overview">
                            <TextField source="description" />
                        </Tab>
                        <Tab label="Projects">
                        </Tab>
                    </TabbedShowLayout>
                }
            />
        </Show>
    )
}

export default StaffShow
