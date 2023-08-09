import React from 'react'
import { TextField, NumberField } from 'react-admin'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CompactShowLayout from './CompactShowLayout'
import RaBox from './RaBox'

test('renders correctly', async () => {
    // Arrange
    const record = {
        name: 'John Doe',
        age: 23,
    }

    const props = {
        layoutComponents: [RaBox],
        children: (
            <RaBox>
                <RaBox>
                    <TextField source="name" />
                </RaBox>
                <RaBox>
                    <NumberField source="age" />
                </RaBox>
            </RaBox>
        ),
        record,
        resource: 'users',
        version: 1,
    }

    const { getByText } = render(<CompactShowLayout {...props} />)

    expect(getByText(record.name)).toBeInTheDocument()
    expect(getByText(record.age.toString())).toBeInTheDocument()
})

// // test 1 child only
// // test 1 child inside layout component
// // test > 1 child in === ; ===
