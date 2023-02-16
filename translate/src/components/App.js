import React from "react";
import UserCreate from '../components/userCreate';
import LanguageContexts from "../contexts/LanguageContexts";
import ColourContext from "../contexts/ColourContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LanguageContexts.Provider value={this.state.language}>
          <ColourContext.Provider value="red">
            <UserCreate />
          </ColourContext.Provider>
        </LanguageContexts.Provider>
      </div>
    );
  }
}

export default App;
