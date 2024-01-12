import { useState } from 'react'
import products from './utils/products'
import ProdusctsListing from './components/Products/ProductsListing/ProdusctsListing'
import ProductsCard from './components/Products/ProductsCard/ProductsCard'
import './App.css'

function App() {
  const [state, setState] = useState(0)
  const [displayProducts, setDisplayProducts] = useState(products)

  return (
    <>
      <h1>home {state}</h1>

      <button
        onClick={() => setState(state + 1)}
      >CLICK ME</button>

      <ProdusctsListing displayProducts={displayProducts} />

    </>
  )
}

export default App
