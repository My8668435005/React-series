import React from 'react';

function CardWithClonedChildren(props) {
  const { children, title } = props;

  // Use React.Children.map to iterate over children and clone them
  const childrenWithProps = React.Children.map(children, (child) => {
    // Check if it's a valid React element
    if (React.isValidElement(child)) {
      // Clone the child and add a new prop
      return React.cloneElement(child, { className: `${child.props.className || ''} card-item` });
    }
    return child; // Return non-element children as is
  });

  return (
    <div class='card'>
      {title && <h3 class='card-title'>{title}</h3>}
      <div class='card-content'>
        {childrenWithProps}
      </div>
    </div>
  );
}

export default CardWithClonedChildren;







//how to use it in app 

import React from 'react';
import CardWithClonedChildren from './components/CardWithClonedChildren';
import './App.css';

function App() {
  return (
    <div className='App'>
      <CardWithClonedChildren title='Items'>
        <p>Item 1</p> {/* This will get className='card-item' */}
        <div>Item 2</div> {/* This will get className='card-item' */}
      </CardWithClonedChildren>
    </div>
  );
}

export default App;