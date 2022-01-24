import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {
  state = { lat: null, errorMessage: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    return (
      <>
        {
        this.state.lat ? 
          <SeasonDisplay lat={this.state.lat} /> 
        : !this.state.lat && this.state.errorMessage ?
          <h1>Error: {this.state.errorMessage}</h1>
        : 
          <Spinner message="Please accept location request" />
        }
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)


