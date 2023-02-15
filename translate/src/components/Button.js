import React from "react";
import LanguageContexts from "../contexts/LanguageContexts";

class Button extends React.Component {
  static contextType = LanguageContexts;

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>
  }
}

export default Button;