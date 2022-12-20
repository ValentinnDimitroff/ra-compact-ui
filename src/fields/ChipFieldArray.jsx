import Chip from '@mui/material/Chip'
import useMediaQuery from '@mui/material/useMediaQuery'
import PropTypes from 'prop-types'
import React from 'react'

const ChipFieldArray = ({ record, source }) => {
    const isXSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'))

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
    record: PropTypes.object,
    source: PropTypes.string,
}

ChipFieldArray.defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    addLabel: true,
}

export default ChipFieldArray
