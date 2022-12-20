import React from 'react'
import PropTypes from 'prop-types'
import { useRecordContext } from 'react-admin'
import Chip from '@mui/material/Chip'
import useMediaQuery from '@mui/material/useMediaQuery'

const ChipFieldArray = ({ source, ...props }) => {
    const isXSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'))
    const record = useRecordContext(props)

    return (
        <ul
            sx={{
                margin: '0px',
                padding: '0px',
                display: 'inline',
            }}
        >
            {record &&
                record[source] &&
                record[source].map((item) => (
                    <Chip key={item} label={item} sx={{ height: isXSmall ? '18px' : undefined }} />
                ))}
        </ul>
    )
}

ChipFieldArray.propTypes = {
    source: PropTypes.string,
}

export default ChipFieldArray
