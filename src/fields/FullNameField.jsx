import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AvatarField from './AvatarField';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    avatar: {
        marginRight: theme.spacing(1),
        marginTop: -theme.spacing(0.5),
        marginBottom: -theme.spacing(0.5),
    },
}));

const FullNameField = ({ record, size }) => {
    const classes = useStyles();

    return record ? (
        <div className={classes.root}>
            <AvatarField className={classes.avatar} size={size} record={record} />
            {`${record.firstName} ${record.lastName}`}
        </div>
    ) : null;
};

FullNameField.propTypes = {
    record: PropTypes.object,
    // source: PropTypes.string,
    // label: PropTypes.string,
    size: PropTypes.string,
};

FullNameField.defaultProps = {
    // source: 'firstName',
    // label: 'resources.customers.fields.name',
};

export default FullNameField;
