import React, { Fragment } from 'react'
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
import { TextField, NumberField } from 'react-admin'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CompactShowLayout from './CompactShowLayout'
import RaBox from './RaBox'


test('renders correctly', async () => {
    // Arrange
    const record = {
        name: "John Doe",
        age: 23
    }

    const props = {
        layoutComponentName: "RaBox",
        children: (<RaBox>
            <RaBox>
                <TextField source="name" />
            </RaBox>
            <RaBox>
                <NumberField source="age" />
            </RaBox>
        </RaBox>
        ),
        record,
        resource: "users",
        basePath: "/users",
        version: 1
    }

    const { getByText } = render(<CompactShowLayout {...props} />)

    // Act

    // Assert
    expect(getByText(record.name)).toBeInTheDocument();
    expect(getByText(record.age.toString())).toBeInTheDocument();
})

