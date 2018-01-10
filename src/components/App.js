import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: ''
    }
  }

  handleClick () {
    this.setState({
      name: 'Kghoon'
    });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>Hello!!!! {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
