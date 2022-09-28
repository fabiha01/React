import './App.css';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );


  return (
    <div>Hi There!</div>
  );
}

export default App;
