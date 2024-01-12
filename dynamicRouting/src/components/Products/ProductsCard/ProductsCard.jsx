import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function ProductsCard({
    id,
    name,
    price,
    discount
}) {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [priceNew, setPriceNew] = useState(0)

    useEffect(() => {
        let afterDiscount = price - (price * discount / 100)
        setPriceNew(afterDiscount)
    }, [])

    function handleNavigate() {
        navigate("/products")
        searchParams.set("id", id)
        setSearchParams(searchParams)
    }

    return (
        <div
            style={{
                width: '350px',
                border: '1px solid red'
            }}
        >
            <h2>{name}</h2>
            <p><del>{price}</del></p>
            <p>{discount}</p>
            <p>After discount {priceNew}</p>
            <button
                onClick={handleNavigate}
            >View Details</button>
        </div>
    )
}

export default ProductsCard