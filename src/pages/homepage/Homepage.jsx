import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../apis/Api'
import ProductCard from '../../components/ProductCard'

const Homepage = () => {
    // logic for get products
    const [products, setProducts] = useState([])
    // Hit API(Get all product) Auto->useEffect(list of products)
    const getProduct = () => {
        getAllProducts().then((res) => {
            //success, message, list of products(products)
            setProducts(res.data.products)

        }).catch((error) => {
            console.log(error)
        })

    }
    useEffect(() => {
        getProduct()


    }, [])
    console.log(products)
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://th.bing.com/th/id/OIP.DVOYr2PK3_6yODtz2S6l3QHaGO?rs=1&pid=ImgDetMain" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>30% off on craft shop</h5>
                            <p>Best quality oif the crafts</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.GZtli54pS-wozGEqSAKF9QHaGw?rs=1&pid=ImgDetMain" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>20% off on second craft</h5>
                            <p>Quality is unpredictable</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.3qANpmWfk_2IEkjNP8dJmQHaE7?rs=1&pid=ImgDetMain" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>15% off on thired slide</h5>
                            <p>more qualatative</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container mt-3 text-center'>
                <h2 >Available Products</h2>

                {/* dynamic card for specific products */}

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map((singleProduct) => (
                            <div class="col">
                                <ProductCard productInformation={singleProduct} color={'red'} />
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Homepage