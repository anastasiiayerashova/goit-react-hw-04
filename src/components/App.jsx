import './App.css'
import { fetchData } from '../unsplash-api';
import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import ReactModal from 'react-modal';


export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
   
  const handleSearch = async (newQuery) => {
    try {
      setQuery(newQuery)
      setPage(1)
      setData([])
      setError(false)
      setLoading(true)
      const result = await fetchData(newQuery, 1)
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
  
  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage)
    setLoadingBtn(true)

    try {
      const result = await fetchData(query, nextPage)
      setData((prev) => [...prev, ...result])
    }

    catch (error) {
      console.log(error)
      setError(true)
    }

    finally {
      setLoadingBtn(false)
    }
  }

  return (
    <div className='mainWrapper'>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader loading={loading} />}
      {error && <ErrorMessage />}
      {query !== '' && data.length <= 0 && <ErrorMessage />}
      {data.length > 0 && <ImageGallery data={data} />}
      {data.length > 0 && !loading && <LoadMoreBtn onSubmit={handleLoadMore} />}
      {loadingBtn && <Loader />}
    </div>
  )
}