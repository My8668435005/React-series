function StyledComponent() {
  const myStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    fontSize: '16px'
  };

  return (
    <p style={myStyle}>
      This text has inline styles.
    </p>
  );
}