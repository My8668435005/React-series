import React , {useState} from 'react';
import './SearchComponent.css';

// Mock data for simulation

const mockData = [
  { id: 1, name: 'Alice Smith' },
  { id: 2, name: 'Bob Johnson' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'Diana Prince' },
  { id: 5, name: 'Ethan Hunt' }
];

function SearchComponent(){

    const [query, setQuery] = useState('');

    const [results, setResults] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(null);


      // Simulate fetching data
    const handleSearch = async () => {
    setIsLoading(true); // Set loading to true before fetch
    setError(null);     // Clear previous errors
    setResults([]);     // Clear previous results

    

       // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));


    try {
      // Filter mock data based on the query (case-insensitive)
        const filteredResults = mockData.filter(
        item =>item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);

    }
    
    catch (err) {
    setError('Failed to fetch search results.');
    console.error('Search error:', err);
    } 
    finally {
      setIsLoading(false); // Set loading to false after fetch (success or error)
    }
};

  // Handle input change and trigger search after a short delay (debouncing simulation)
  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    // Basic debouncing: only search if query is not empty
    if (newQuery.trim() !== '') {
      handleSearch();
    } else {
      setResults([]); // Clear results if query is empty
    }
  };


return (
    <div className='search-container'>
    <h3>Search Component</h3>
    <div className='search-input-group'>
        <input
        type='text'
        placeholder='Search for a name...' 
        value={query}
        onChange={handleInputChange}
        className='search-input'
        />
        <button onClick={handleSearch} disabled={isLoading} className='search-button'>
        {isLoading ? 'Searching...' : 'Search'}
        </button>
    </div>

    {error && <p className='error-message'>{error}</p>}

    {isLoading && <p className='loading-message'>Loading results...</p>}

    {!isLoading && !error && query.trim() !== '' && results.length === 0 && (
        <p className='no-results-message'>No results found for "{query}".</p>
    )}

    {!isLoading && !error && results.length > 0 && (
        <ul className='results-list'>
        {results.map(item => (
            <li key={item.id} className='result-item'>
            {item.name}
            </li>
        ))}
        </ul>
    )}
    </div>
);
}



export default SearchComponent;
