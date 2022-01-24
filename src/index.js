import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      lat: null, 
      errorMessage: '' 
    };
    
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }
  render() {
    return (
      <div>
        {this.state.lat ? 
          <h1>Latitude: {this.state.lat}</h1> 
       : !this.state.lat && this.state.errorMessage ?
        <h1>Error: {this.state.errorMessage}</h1>
       : 
       <h1>Loading...</h1> }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)


