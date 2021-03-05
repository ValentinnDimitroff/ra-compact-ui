import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { CardContentInner } from 'react-admin';
import RaField from './RaField';
import { cloneRecursively, isLayoutComponent } from '../core';

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
                (x) => isLayoutComponent(x, layoutComponentName),
                (x) => (
                    <RaField
                        field={x}
                        basePath={basePath}
                        record={record}
                        resource={resource}
                    />
                ),
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
