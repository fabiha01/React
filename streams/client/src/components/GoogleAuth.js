import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '650648567623-hrc5r8c84g0ob6eerohd0l8dul3a60aq.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return <div>Google auth</div>;
  }
}

export default GoogleAuth;