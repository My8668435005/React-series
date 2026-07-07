// Child Component: Greeting
function Greeting(props) {
  // Accessing data passed via props
  return (
    <h1>Hello, {props.name}! Welcome to our app.</h1>
  );
}

// Parent Component: App
function App() {
  const userName = "Alice";

  return (
    <div>
      {/* Passing 'userName' as a prop named 'name' to the Greeting component */}
      <Greeting name={userName} />
    </div>
  );
}