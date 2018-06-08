import React from "react";
import Hello from "./Hello";
import Band from "./Band";
import AddBandForm from "./AddBandForm";

import sampleBands from "../sample-bands.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    bands: {}
  };

  addBand = band => {
    const bands = { ...this.state.bands };
    bands[`band-${Date.now()}`] = band;
    this.setState({
      bands
    });
  };

  loadSampleBands = () => {
    this.setState({ bands: sampleBands });
  };

  render() {
    return (
      <div style={styles}>
        <Hello name="Dabess Bands" />
        <AddBandForm addBand={this.addBand} />
        <ul className="band-list">
          {Object.keys(this.state.bands).map(band => (
            <Band key={band} index={band} details={this.state.bands[band]} />
          ))}
        </ul>
        <button onClick={this.loadSampleBands}>Load Bands</button>
      </div>
    );
  }
}

export default App;
