# ra-compact-ui
Enhanced styling components for popular framework [`react-admin`](https://github.com/marmelab/react-admin). 

No extra dependencies are required except the ones react-admin is already using.

Why use? 
 - reduces styling boilerplate code
 - eases layout customizations 
 - maintains native usage of built-in `react-admin` components

[![npm version](https://img.shields.io/npm/v/ra-compact-ui.svg)](https://www.npmjs.com/package/ra-compact-ui)
[![npm downloads](https://img.shields.io/npm/dm/ra-compact-ui.svg)](https://www.npmjs.com/package/ra-compact-ui)
[![GitHub license](https://img.shields.io/github/license/ValentinnDimitroff/ra-compact-ui.svg)](https://github.com/ValentinnDimitroff/ra-compact-ui/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/ValentinnDimitroff/ra-compact-ui/)
[![minzipped size](https://badgen.net/bundlephobia/minzip/ra-compact-ui)](https://bundlephobia.com/result?p=ra-compact-ui)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Actively maintained and developed with monthly releases!

# Installation

Available as a npm package. You can install it using:

```sh
npm install ra-compact-ui
#or
yarn add ra-compact-ui
```
Run the Demo
```sh
npm run start-demo
#or
yarn start-demo
```
# Table of Contents
Show View 

<ul>
    <li><a href="#layouts">Layouts</a></li>
    <ul>
        <li><a href="#boxedshowlayout">Box ShowLayout</a></li>
        <li><a href="#gridshowlayout">Grid ShowLayout</a></li>
        <li><a href="#boxedshowlayout">Compact ShowLayout</a></li>
        <li><a href="#boxedshowlayout">Show Splitter</a></li>
    </ul>    
</ul>

Create & Edit View 

<ul>
    <li><a href="#compactform">CompactForm</a></li>
</ul>

# Examples
## Show View Components

### Layouts
Layout components which allow building custom Show Layouts using unlimited nesting of `material-ui`'s `Box` or `Grid` components while maintaining native use of all of the `react-admin` field-related components. Each layout can be used inside the `Show` component as well as inside the `TabbedShowLayout`'s `Tab` component.

**Important** - In order for the layouts to work properly you should use the provided wrappers of `material-ui`'s layout components named relatively - `RaBox` and `RaGrid`. They receive and pass all the props provided by the `material-ui`'s api directly.

<br/>

### BoxedShowLayout 
Utilizes `material-ui`'s Box component wrapped inside `RaBox` and provides easy access to common css and flex-box properties.

```jsx
const useStyles = makeStyles(theme => ({
    detailsBox: {
        paddingRight: "50px",
        borderRight: "solid thin",
        marginRight: "50px",
    },
}));

...

<BoxedShowLayout>
    <RaBox display="flex" >
        <RaBox display="flex" flexWrap="wrap" flexGrow={4} className={classes.detailsBox}>
            <RaBox flex="0 0 100%" display="flex" justifyContent="space-between">
                <ReferenceField label="Client Name" source="clientId" reference="clients">
                    <TextField source="name" />
                </ReferenceField>
                <ChipField source="progressStatus" label="Progress Status" />
                <TextField source="priority" />
            </RaBox>
            <RaBox flex="0 0 100%" display="flex" justifyContent="space-between">
                <DateField source="startDate" />
                <TextField source="timeElapsed" />
                <DateField source="deadline" />
            </RaBox>
        </RaBox>
        <RaBox display="inline-flex" flexDirection="column" flexGrow={1}>
            <ReferenceField label="Project Manager" source="managerId" reference="staff">
                <UserChipField source="fullName"  />
            </ReferenceField>
            <ReferenceField label="Product Owner" source="productOwnerId" reference="staff">
                <UserChipField source="fullName"  />
            </ReferenceField>
            <ReferenceField label="Marketing Specialist" source="marketingSpecialistId" reference="staff">
                <UserChipField source="fullName"  />
            </ReferenceField>
        </RaBox>
    </RaBox>
    <RaBox flex="0 0 100%" display="flex" mt="20px">
        <ArrayField source="activityRecords">
            <Datagrid>
                <DateField source="date" />
                <TextField source="description" />
                <TextField source="memberNames" />
            </Datagrid>
        </ArrayField>
    </RaBox>
</BoxedShowLayout>
```

![image](https://user-images.githubusercontent.com/26602880/112832780-78bfcb80-909e-11eb-9aa1-9c33bb173fa2.png)

<br/>

### GridShowLayout
Utilizes `material-ui`'s Grid component wrapped inside `RaGrid`. Useful for aligning fields into rows and columns, as well as for making layout sections responsive.

Usage is absolutely analogous to the `BoxShowLayout`.

<br/>

### CompactShowLayout
This layout is a more generic version allowing you to pass your own layout building blocks (components). It serves also as the base component wrapped by the above ones.

Pass to `layoutComponents` prop an array which specifies the used layout components to be escaped as non-field components while rendering.

**Important** - All layout components should have a specified `displayName`.

```jsx
<CompactShowLayout layoutComponents={[CustomBox, RaBox]}>
    <CustomBox>
        <TextField source="name"/>
        <RaBox>
            <NumberInput source="age" />
        </RaBox>
    </CustomBox>
</CompactShowLayout>
```

<br/>

### ShowSplitter
Need to mix up different layouts on the same page and separate different sections? The `<ShowSplitter/>` component helps you do just that with ease.

- Pass the component as single child to the `<Show/>` component.
- Then pass your different layouts to the `<ShowSplitter/>`'s props `leftSide` and `rightSide`.

**hint** - to escape the default `<Card/>` surface provided by the  `<Show/>` component pass your custom value, e.g. `component="div"`. 

```jsx
import { ShowSplitter } from 'ra-compact-ui';

...

const StaffShow = props => (
    <Show
        {...props}
        component="div"
    >
        <ShowSplitter
            leftSide={
                <SimpleShowLayout>
                    <AvatarShowField />
                    <TextField source="full_name" />
                    <TextField source="email" />
                    <ArrayField source="skills">
                        <SingleFieldList>
                            <ChipField source="name" />
                        </SingleFieldList>
                    </ArrayField>
                </SimpleShowLayout>
            }
            rightSide={
                <TabbedShowLayout>
                    <Tab label="Overview">
                        <TextField source="description" />
                    </Tab>
                    <Tab label="Projects">
                        {/* add more fields here */}
                    </Tab>
                </TabbedShowLayout>
            }
        />
    </Show>
);
```
![image](https://user-images.githubusercontent.com/26602880/112832872-9ab94e00-909e-11eb-9127-2a864f1a241e.png)

Override and customize the way the layout is split using the `leftSideProps` and `rightSideProps` props. You can pass objects with props which will be destructured to the respective `material-ui`'s `Grid` components which wrap the passed layouts. 

The `component` prop is also supported by each side of the split layout. Example values:

```jsx
<ShowSplitter
    leftSideProps={{
        md: 4,
        component: 'div'
    }}
    rightSideProps={{
        md: 8
    }}
    leftSide={...}
    rightSide={...}
/>
```
<br/>

## Create & Edit View Components
### CompactForm
Provides form layout customization out of the box just like using the `<SimpleForm/>`.

Pass to `layoutComponents` prop an array which specifies the used layout components to be escaped as non-input components while rendering.

**Important** - All layout components should have a specified `displayName`.

```jsx
import { CompactForm, RaBox } from 'ra-compact-ui';

...

const StaffEdit = props => (
    <Edit {...props}>
        <CompactForm layoutComponents={[RaBox]}>
            <RaBox display="flex" justifyContent="space-around">
                <TextInput source="full_name" />
                <TextInput source="email" />
            </RaBox>
            <TextInput source="description" />
            <TextInput source="avatar_url" />
        </CompactForm>
    </Edit>
);
```

<br/>

# About Author

An enthusiast in :sparkling_heart: with building software who likes to call it "the grown up's LEGO".

If you enjoy the library and want to support me, you can always <a href="https://www.buymeacoffee.com/vdimitroff" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee" /></a>

