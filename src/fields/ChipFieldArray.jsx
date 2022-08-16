import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Chip from '@mui/material/Chip'

const styles = {
    ul: {
        margin: '0px',
        padding: '0px',
        display: 'inline',
    },
    responsiveChip: {
        height: '18px',
    },
}

const useStyles = makeStyles(styles)

const ChipFieldArray = ({ record, source }) => {
    const classes = useStyles()
    const isXSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'))

    return (
        <ul className={classes.ul}>
            {record &&
                record[source] &&
                record[source].map((item) => (
                    <Chip
                        key={item}
                        label={item}
                        className={isXSmall ? classes.responsiveChip : undefined}
                    />
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
