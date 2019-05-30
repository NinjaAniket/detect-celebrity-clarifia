import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageArea from "./components/ImageArea";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "8fe455a4afc64f18a6328da58b514029"
});
class App extends React.Component {
  state = {
    input: "",
    imageUrl: "",
    celebName: {},
    showName: false
  };

  detectFaces = data => {
    const name = data.outputs[0].data.regions[0].data.concepts[0].name;
    console.log(name);

    return { name };
  };

  onInputChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  displayName = celebName => {
    this.setState({
      celebName,
      isLoading: true
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.setState({
      input: "",
      imageUrl: this.state.input,
      showName: true
    });

    app.models
      .predict("e466caa0619f444ab97497640cefc4dc", this.state.input)
      .then(res => this.displayName(this.detectFaces(res)))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <div className="search">
          <SearchBar
            value={this.state.input}
            onInputChange={this.onInputChange}
            onFormSubmit={this.onFormSubmit}
          />
          <ImageArea
            celebName={this.state.celebName}
            imageUrl={this.state.imageUrl}
            showName={this.state.showName}
          />
        </div>
      </div>
    );
  }
}

export default App;
