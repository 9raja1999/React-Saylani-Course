import React, { memo } from 'react'
import Card from '../../Card/Card';
function ProductsListing({ products, handle }) {
    console.log('HEY FROM LISTING');
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                {
                    products.map((product, index) => {
                        return <Card
                            title={product.title}
                            description={product.description}
                            image={product.thumbnail}
                        />
                    })
                }
            </div>
            <button
                onClick={handle}
            >Load More</button>
        </>
    )
}

export default memo(ProductsListing)