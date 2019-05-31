1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- .map, .filter, .concat

- Object.assign


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- In Redux, an action is a packet of information that describes events that have occured in the UI. Action tell the reducers how to update the state tree.

- Reducers are functions that take in the current state tree and an action object as arguements. Using a switch case to check the action type of the dispatched action, create an updated state tree based on the action type and the action payload. Each case then returns the new, updated state tree triggering the UI to re-render with new data.

- The store, also referred to as the ‘single source of truth’ in a Redux app, stores all the important data of the app. The store can only be updated by a reducer and any component that needs to update state can do so through action creators. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state where most local data for an app is stored (this would be the store). Application state is generally stored on or close to the root component of the app so state properties can be passed down to descendent components as needed. 

- Component state is any state that isn’t part of the application state. Component state is stored on a component, but in this case the component may be far from the root component of the app. This is okay because Component state is generally only directly accessed by the component that stores it.

- Application state is appropriate for most data storage in an app. Component state is mainly useful for storing temporary data such as input field values before form submission, or maybe temporary user settings concerning the view of a particular component.


1.  What is middleware?

Middleware is a function that returns a function that returns a function. Used to intercept a process, perform some action, and then either send the process along or stop the process.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that allows a Redux action creator to return a function instead of an action. The main use for thunk is to allow for asynchronous actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect.
