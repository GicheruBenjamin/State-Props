# Props and state.
## State
Definition: State is a JavaScript object that lives within a component and is used to store data that can change over time. When the state changes, the component re-renders to reflect the updated data. State allows components to be dynamic and interactive.
### Characteristics:
Managed within a component.
Can be updated using the setState method.
Triggers a re-render of the component when updated.
## Props
Definition: Props are read-only properties passed down from parent components to their child components. They provide a way to configure and customize child components without altering their internal logic. Props act as a communication channel between parent and child.
### Characteristics:
Passed down during rendering.
Immutable within the receiving component (cannot be modified by the child).
Used to provide data or configuration to the child component.

## Code Explanation
App.js
Navbar has prop for the links don't change.
Profile changes because it has state. {Click on the update name and some changes happen}
