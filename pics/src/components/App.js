import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {

  async onSearchSubmit(term) {
   const response = await axios;
    response.get('https://api.unsplash.com/search/photos', {
      params: { query: term }, 
      headers: {
        Authorization: 'Client-ID 0jSSpL1RxeagoGG6XTf-OyZVMlQC2E-kdUtvEyR02xA'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }

}

export default App;
