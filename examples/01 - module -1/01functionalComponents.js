//used for presentational purposes (displaying data)

// A simple functional component
function WelcomeMessage(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using arrow function syntax (more common)
const Greeting = (props) => {
  return (
    <div>
      <h2>Welcome back, {props.userName}!</h2>
      <p>Your latest updates are here.</p>
    </div>
  );
};



