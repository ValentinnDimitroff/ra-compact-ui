import React, { Children, isValidElement, cloneElement } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Labeled, CardContentInner } from 'react-admin';

const sanitizeRestProps = ({
    children,
    className,
    record,
    resource,
    basePath,
    version,
    initialValues,
    translate,
    ...rest
}) => rest;

const RaField = ({
    field,
    record,
    resource,
    basePath,
}) => {
    return (
        <div
            key={field.props.source}
            className={classnames(
                `ra-field ra-field-${field.props.source}`,
                field.props.className
            )}
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
                        cloneElement(field, {
                            record,
                            resource,
                            basePath,
                        })
                    )}
        </div>
    );
}

const recursivelyFindField = ({ field, ...props }) => {
    // Non-layout element found
    if (props.layoutComponentTypeCheck(field)) {
        return (
            <RaField
                field={field}
                {...props}
            />
        );
    }

    // Clone layout element and continue checking children
    return cloneElement(field, {
        children: Children.count(field.props.children) > 1
            ? field.props.children.map(child =>
                recursivelyFindField({
                    field: child,
                    ...props
                }))
            : recursivelyFindField({
                field: field.props.children,
                ...props
            })
    });
}

const CompactShowLayout = ({
    layoutComponentTypeCheck,
    basePath,
    className,
    children,
    record,
    resource,
    version,
    ...rest
}) => {
    return (
        <CardContentInner
            className={className}
            key={version}
            {...sanitizeRestProps(rest)}
        >
            {Children.map(children, field =>
                field && isValidElement(field)
                    ? recursivelyFindField({
                        layoutComponentTypeCheck,
                        field,
                        record,
                        resource,
                        basePath,
                    }) : null
            )}
        </CardContentInner>
    )
}

export const compactShowLayoutPropTypes = {
    basePath: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    record: PropTypes.object,
    resource: PropTypes.string,
    version: PropTypes.number,
}

CompactShowLayout.propTypes = {
    layoutComponentTypeCheck: PropTypes.func,
    ...compactShowLayoutPropTypes,
}

export default CompactShowLayout
