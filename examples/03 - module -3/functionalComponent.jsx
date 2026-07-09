function MyComponent(props) {
  // JavaScript logic can go here
  return (
    // JSX: JavaScript XML, looks like HTML but is JavaScript
    <div>
      <h1>Hello from MyComponent!</h1>
      <p>Received props: {props.message}</p>
    </div>
  );
}

// Alternatively, using ES6 arrow functions, which is very common:

const MyComponent = (props) => {
  return (
    <div>
      <h1>Hello from MyComponent!</h1>
      <p>Received props: {props.message}</p>
    </div>
  );
};

