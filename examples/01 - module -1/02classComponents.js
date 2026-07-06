import React from 'react';

class UserProfileCard extends React.Component {
  constructor(props) {
    super(props);
    // State is initialized in the constructor
    this.state = {
      isExpanded: false
    };
  }

  // Lifecycle methods like componentDidMount, componentDidUpdate, etc., would go here

  render() {
    return (
      <div className='card'>
        <h3>{this.props.user.name}</h3>
        <p>{this.props.user.email}</p>
        {/* Example of using state */}
        {this.state.isExpanded && <p>More details...</p>}
      </div>
    );
  }
}