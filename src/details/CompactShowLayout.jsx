import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { CardContentInner } from 'react-admin';
import RaField from './RaField';
import { cloneRecursively } from '../core';

const EMPTY_LAYOUT_NODE_ERROR = 'Layout node has no found children! Nesting layout components should always end with a ra-field of any type!';

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

const isLayoutComponent = (child, layoutComponentName) => {
    if (child == null) {
        throw EMPTY_LAYOUT_NODE_ERROR;
    }

    return child.type && child.type.displayName === layoutComponentName;
};

const CompactShowLayout = ({
    layoutComponentName,
    basePath,
    className,
    children,
    record,
    resource,
    version,
    ...rest
}) => (
    <CardContentInner className={className} key={version} {...sanitizeRestProps(rest)}>
        {Children.map(
            children,
            (child) => cloneRecursively(
                child,
                {
                    layoutComponentName,
                    record,
                    resource,
                    basePath,
                },
                (x) => isLayoutComponent(x, layoutComponentName),
                (x, xProps) => <RaField field={x} {...xProps} />,
            ),
        )}
    </CardContentInner>
);

CompactShowLayout.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
    resource: PropTypes.string,
    version: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    layoutComponentName: PropTypes.string,
};

export default CompactShowLayout;
