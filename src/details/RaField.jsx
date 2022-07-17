import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Labeled } from 'react-admin';

const sanitizeRestProps = ({ layoutComponentName, ...rest }) => rest;

const RaField = ({
    field,
    record,
    resource,
    basePath,
    ...props
}) => (
    <div
        key={field.props.source}
        className={classnames(`ra-field ra-field-${field.props.source}`, field.props.className)}
        {...sanitizeRestProps(props)}
    >
        {field.props.addLabel ? (
            <Labeled
                record={record}
                resource={resource}
                basePath={basePath}
                label={field.props.label}
                source={field.props.source}
                disabled={false}
            >
                {field}
            </Labeled>
        ) : typeof field.type === 'string' ? (
            field
        ) : (
            React.cloneElement(field, {
                record,
                resource,
                basePath,
            })
        )}
    </div>
);

RaField.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
    resource: PropTypes.string,
    field: PropTypes.object,
};

export default RaField;
