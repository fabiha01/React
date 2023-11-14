const Home = () => {

  const handleClick = ( name, e ) => {
    console.log(`hello ${name}`, e);
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={(e) => handleClick('yoshi', e)}>Click Me</button>
    </div>
   );
}
 
export default Home;