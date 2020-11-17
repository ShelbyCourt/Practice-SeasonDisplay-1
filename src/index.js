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
    }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
              // this.setState used here and everywhere else with the exception of the above.
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
        // console.log(err)
    );
  }

  // componentDidMount() {
  //   console.log('My component was rendered to the screen');
  // }
  // componentDidUpdate() {
  //   console.log('My component did UPDATED')
  // }

    render() {
      if (this.state.errorMessage && !this.state.lat) {
        return <div>
          Error: {this.state.errorMessage}
        </div>
      }
      if (!this.state.errorMessage && this.state.lat) {
        return <div>
          Latitude: {this.state.lat}
        </div>
      }
      return <div>
        Loading!
      </div>;

    // return (
    //   <div> 
    //   Latitude: {this.state.lat} 
    //   <br />
    //   Error: {this.state.errorMessage}
    //   </div>
    // );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
