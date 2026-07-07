function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Jane',
  lastName: 'Doe'
};

const greetingElement = (
  <h1>Hello, {formatName(user)}!</h1>
);

