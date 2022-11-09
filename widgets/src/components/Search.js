import { useState, useEffect } from "react";
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term); 
  const [results, setResults] = useState([]);

  // Run anytime term changes
  useEffect(() => {
    const timerId = setTimeout(() => {
      // Queue up a term in debouncedTerm
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    }
  }, [term]);


  // When a change goes through to debounced term
  // we will run this useEffect
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(' https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });

      setResults(data.query.search);
    };

    search();
    // will run when we first render a component
  }, [debouncedTerm]);


  const renderResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a 
          className="ui button" 
          href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go
        </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  });

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
      <div className="ui celled list">{renderResults}</div>
    </div>
  );
}
 
export default Search;