import React from "react";
import LanguageContexts from "../contexts/LanguageContexts";
import ColourContext from "../contexts/ColourContext";

class Button extends React.Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContexts.Consumer>
          {({language}) => this.renderSubmit(language)}
        </LanguageContexts.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColourContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColourContext.Consumer>
    );
  }
}

export default Button;
