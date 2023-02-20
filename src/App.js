import React from "react";
import "./App.css"
import Header from "./Components/Header/Header";
import ResultContainer from "./Components/ResultContainer/ResultContainer";
import SearchBox from "./Components/SearchBox/SearchBox";

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      headerText: 'Name it!',
      hearderExpanded: true,
      suggestedNames: []
    }
  }
  handleInputChange = (inputText) => {
    this.setState({
      hearderExpanded: !(inputText),
      suggestedNames: inputText ? name(inputText) : []
    })
  }

  render() {

    return (
      <div>
        <Header hearderExpanded={this.state.hearderExpanded} headTitle={this.state.headerText} />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultContainer suggestedNames={this.state.suggestedNames} />
      </div>
    )
  }
}

export default App;