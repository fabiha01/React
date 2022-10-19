import { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('I run after every render and at initial render');
  }, [term]);

  return ( 
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            value={term} 
            onChange={(e) => setTerm(e.target.value)} 
            type="text" 
            className="input" 
          />
        </div>
      </div>
    </div>
   );
}
 
export default Search;