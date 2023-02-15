import React from "react";
import UserCreate from '../components/userCreate';
import LanguageContexts from "../contexts/LanguageContexts";
import ColourContext from "../contexts/ColourContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language
          <i
            className="flag uk"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
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
