import React from 'react'

const ProductCard = ({ productInformation, color }) => {
    return (
        <>
            <div class="card" style={{ width: "18rem" }}>
                <img src={`http://localhost:5000/products/${productInformation.productImage}`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <div className='d-flex justify-content-between'>
                        <h5 class="card-title">{productInformation.productName}</h5>
                        <h5 class="text-danger">{productInformation.productPrice}</h5>
                    </div>
                    <p class="card-text">{productInformation.productDescription.slice(0, 20)}</p>
                    <a href="#" class="btn btn-outline-dark w-100">View more</a>
                </div>
            </div>

        </>
    )
}

export default ProductCard