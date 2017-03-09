## ActionButton component

Button with custom states, icons, colors.

```
static propTypes = {
    name: React.propTypes.string,
    loadingName: React.propTypes.string,
    isDisabled: React.propTypes.bool,
    isLoading: React.propTypes.bool,
    withColor: React.propTypes.string,
    withIcon: React.propTypes.string,
    addClass: React.propTypes.string,
    onClick: React.propTypes.func
  }
```

Usage cases:

```
<ActionButton name="Continue" loadingName="Processing..." isLoading={1} withIcon="settings" />
<ActionButton name="Black button" withColor="black" />,
<ActionButton name="Grey button" withColor="grey" />,
<ActionButton name="Blue button" withColor="blue"/>,
<ActionButton name="Green button" withColor="green" />,
<ActionButton name="Red button" withColor="red" />
<ActionButton name="Outline grey" withColor="outline-grey" />,
<ActionButton name="Outline blue" withColor="outline-blue" />,
<ActionButton name="Outline green" withColor="outline-green" />,
<ActionButton name="Outline red" withColor="outline-red" />
```