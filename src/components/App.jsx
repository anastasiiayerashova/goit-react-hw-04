import './App.css'
import { fetchData } from '../unsplash-api';
import { useState, useEffect, useRef, useCallback } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';

export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const loadMoreRef = useRef(null);
   
  const handleSearch = useCallback(async (newQuery) => {
    if (newQuery === query) return
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
  }, [query]) //useCallback для запобігання непотрібним запитам
  
  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage)

    try {
      const result = await fetchData(query, nextPage)
      setData((prev) => [...prev, ...result])

      if (loadMoreRef.current) {
        loadMoreRef.current.scrollIntoView({ behavior: 'smooth' });

     }
    }

    catch (error) {
      console.log(error)
      setError(true)
    }
  }

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }
  
  useEffect(() => {

    const handleKeyDown = (e) => {
      if (isModalOpen && e.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])
  
  return (
    <div className='mainWrapper'>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {query !== '' && data.length <= 0 && !loading && <ErrorMessage />}
      {data.length > 0 && <ImageGallery data={data} onImageClick={openModal} />}
      {data.length > 0 && data.length % 12 === 0 && <LoadMoreBtn onSubmit={handleLoadMore} ref={loadMoreRef} />}
      <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} image={selectedImage} />
    </div>
  )
}