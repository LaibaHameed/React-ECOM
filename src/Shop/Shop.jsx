import React, { useState } from 'react'
import PageHeader from '../Components/PageHeader'
import Data from '../products.json'
import ProductCard from './ProductCard'

const showResults = "Showing 01 - 12 of 139 Results"

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);

  return (
    <div>
        <PageHeader title="Our Shop" curPage="Shop" />
        {/* shop page */}
        <div className='shop-page padding-tb'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-12'>
                        <article>
                            {/* layout and title here */}
                            <div className='shop-title d-flex flex-wrap justify-content-between'>
                                <p> {showResults} </p>
                                <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                    <a className='grid' onClick={()=> setGridList(!GridList)}>
                                        <i className='icofont-ghost'></i>
                                    </a>
                                    <a className='list' onClick={()=> setGridList(!GridList)}>
                                        <i class="icofont-listine-dots"></i>
                                    </a>
                                </div>
                            </div>
                            {/* product Card */}
                            <div>
                                <ProductCard GridList={GridList} products={products} />
                            </div>
                        </article>
                    </div>
                    <div className='col-lg-4 col-12'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop