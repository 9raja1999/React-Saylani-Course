import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import products from '../../utils/products'

function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [details, setDetails] = useState(null)


  useEffect(() => {
    let pid = parseInt(searchParams.get('id'))
    console.log( typeof pid)
    let product = products.filter((product, idx) => product.id === pid)
    setDetails(product[0])
  }, [])



  console.log(details)
  return (
    <div>
      <h1>Product {searchParams.get('name')}</h1>

      {details && <p>{details.price}</p>}
    </div>
  )
}

export default Products