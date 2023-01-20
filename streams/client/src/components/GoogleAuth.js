import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: "streamy",
      });
    });
  }

  render() {
    return <div>Google auth</div>;
  }
}

export default GoogleAuth;