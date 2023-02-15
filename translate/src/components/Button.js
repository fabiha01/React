import React from "react";
import LanguageContexts from "../contexts/LanguageContexts";
import ColourContext from "../contexts/ColourContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    return (
      <ColourContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContexts.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContexts.Consumer>
          </button>
        )}
      </ColourContext.Consumer>
    );
  }
}

export default Button;