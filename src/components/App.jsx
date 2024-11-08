import './App.css'
import { fetchData } from '../unsplash-api';
import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';


export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
   
  const handleSearch = async (query) => {
    try {
      setData([])
      setError(false)
      setLoading(true)
      const result = await fetchData(query)
      setData(result)
    }
  
    catch (error) {
      console.log(error)
      setError(true)
    }

    finally {
      setLoading(false)
    }
  }
  

  return (
    <div className='mainWrapper'>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader loading={loading} />}
      {error && <ErrorMessage /> }
    </div>
  )
}