import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

const AvatarField = ({
    record,
    source,
    size,
    className,
}) => (record ? (
    <Avatar
        src={`${record[source]}?size=${size}x${size}`}
        style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
        className={className}
    />
) : null);

AvatarField.defaultProps = {
    size: '25',
    source: 'picture',
};

AvatarField.propTypes = {
    record: PropTypes.string,
    source: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
};

export default AvatarField;
