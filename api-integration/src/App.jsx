import { useEffect, useState, useCallback } from 'react'
import Card from './components/Card/Card'
import ProductsListing from './components/Products/ProductsListing/ProductsListing'
import getAllProducts from './service/productsService'
import './App.css'

function App() {
  const [skip, setSkip] = useState(0)
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState(null)

  useEffect(() => {
    (async () => {
      let response = await getAllProducts(skip)
      if (response) { // !null || !undefined
        setProducts([...products, ...response.products])
      }
    })()
  }, [skip])


  const handlePagination = useCallback(() => {
    setSkip(skip + 10)
  }, [])

  function handleChane(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChane}
      />
      <button>SEARCH</button>
      <ProductsListing
        products={products}
        handle={handlePagination}
      />

    </>
  )
}

export default App
