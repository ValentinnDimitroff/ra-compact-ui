const EMPTY_LAYOUT_NODE_ERROR = 'Layout node has no found children! Nesting layout components should always end with a ra-field of any type!';

export const isLayoutComponent = (child, layoutComponentName) => {
    if (child == null) {
        throw EMPTY_LAYOUT_NODE_ERROR;
    }

    return child.type && child.type.displayName === layoutComponentName;
};
