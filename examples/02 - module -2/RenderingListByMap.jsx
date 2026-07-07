function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

// Usage:
// const nums = [1, 2, 3, 4, 5];
// <NumberList numbers={nums} />