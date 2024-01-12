import React, { memo } from 'react'
import ProductsCard from '../ProductsCard/ProductsCard'
function ProdusctsListing({
    displayProducts
}) {

    console.log("lklklk")
    return (
        <div
            style={{
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center'
            }}
        >
            {
                displayProducts.map((product, index) => {
                    return <ProductsCard
                        key={index}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        discount={product.discount}
                    />
                })
            }
        </div>
    )
}

export default memo(ProdusctsListing)