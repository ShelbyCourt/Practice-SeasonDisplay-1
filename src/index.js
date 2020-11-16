import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor (props) {
      super();
//This is the ONLY time we do a direct assignment to this.state!!!!!!
      this.state = {
          lat: null,
          errorMessage: ''
      };
    
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // this.setState used here and everywhere else with the exception of the above.
        this.setState({lat: position.coords.latitude});
      },
      err => {
        this.setState({errorMessage: err.message});
      }
      // console.log(err)
    );
  }
    render() {

    return (
      <div> 
      Latitude: {this.state.lat} 
      <br />
      Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
