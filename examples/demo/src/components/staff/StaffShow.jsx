import React from 'react'
import {
    ArrayField,
    ChipField,
    Show,
    SimpleShowLayout,
    SingleFieldList,
    Tab,
    TabbedShowLayout,
    TextField,
} from 'react-admin'
import { ShowSplitter, AvatarField } from 'ra-compact-ui'

const StaffShow = (props) => {
    return (
        <Show {...props} component="div">
            <ShowSplitter
                leftSideProps={{
                    md: 4,
                }}
                rightSideProps={{
                    md: 8,
                }}
                leftSide={
                    <SimpleShowLayout>
                        <AvatarField
                            source="avatar_url"
                            altSource="full_name"
                            label={false}
                            size="150px"
                            sx={{
                                marginBottom: '10px',
                                flexShrink: 0,
                                flexGrow: 0,
                                margin: '0 auto',
                            }}
                        />
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
                        <Tab label="Projects"></Tab>
                    </TabbedShowLayout>
                }
            />
        </Show>
    )
}

export default StaffShow
