import React, { Children, isValidElement, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { CardContentInner } from 'react-admin'
import RaField from './RaField'

const EMPTY_LAYOUT_NODE_ERROR =
    'Layout node has no found children! Nesting layout components should always end with a ra-field of any type!'

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
}) => rest

const isLayoutComponent = (child, layoutComponentName) => {
    if (child == null) {
        throw EMPTY_LAYOUT_NODE_ERROR
    }

    return child.type && child.type.displayName === layoutComponentName
}

const recursivelyFindField = ({ child, ...props }) => {
    if (isLayoutComponent(child, props.layoutComponentName)) {
        // Clone current layout element and continue traversing children
        return cloneElement(child, {
            children:
                Children.count(child.props.children) > 1
                    ? child.props.children.map((innerChild) =>
                          recursivelyFindField({
                              child: innerChild,
                              ...props,
                          })
                      )
                    : recursivelyFindField({
                          child: child.props.children,
                          ...props,
                      }),
        })
    }

    // Non-layout element found - recursion end
    return <RaField field={child} {...props} />
}

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
        {Children.map(children, (child) =>
            child && isValidElement(child)
                ? recursivelyFindField({
                      layoutComponentName,
                      child,
                      record,
                      resource,
                      basePath,
                  })
                : null
        )}
    </CardContentInner>
)

CompactShowLayout.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
    resource: PropTypes.string,
    version: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    layoutComponentName: PropTypes.string,
}

export default CompactShowLayout
