import { useEffect, useState, useCallback, useContext } from 'react'
import Card from './components/Card/Card'
import ProductsListing from './components/Products/ProductsListing/ProductsListing'
import { getAllProducts, searchProduct } from './service/productsService'
import './App.css'
import { MainContext } from './providers/context/MainContext'
import MainContextProvider from './providers/context/MainContextProvider'

function App() {
  const { count, setCount } = useContext(MainContext)
  const [skip, setSkip] = useState(0)
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState(null)

  useEffect(() => {
    (async () => {
      console.log("This Data")
      let response = await getAllProducts(skip)
      if (response) { // !null || !undefined
      console.log("This Data" , response)
        setProducts([...products, ...response.products])
      }
    })()
  }, [skip])


  const handlePagination = useCallback(() => {
    console.log("SJIP" , skip);
    setSkip(skip + 10)
  }, [skip])

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }


  async function handleSearch() {
    const data = await searchProduct(searchTerm)
    if (data.products.length > 0) {
      setProducts(data.products)
    }
  }



  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>SEARCH</button>
      <button
        onClick={() => setCount(count+1)}
      >INC COUNT</button>
      <ProductsListing
        products={products}
        handle={handlePagination}
      />

    </>
  )
}

export default App
