import React from 'react'
import { Link } from 'react-router-dom';
import Ratting from "../Components/Ratting";

const ProductCard = ({ GridList, products}) => {
    console.log(products);
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list" }`}>
      {
        products.map((product, i)=>(
          <div key={i} className='col-lg-4 col-md-6 col-12'>
          {/* if grid the product-list-item or if list then  product-item*/}
            <div className={`${GridList ? "product-item" : "product-list-item " }`}>
              {/* product images */}
              <div className='product-thumb'>
                <div className='pro-thumb'>
                  <img src={product.img} alt='image' />
                </div>
                {/* Product action links */}
                <div className='product-action-link'>
                  <Link to={`/shop/${product.id}`}> <i className='icofont-eye'></i> </Link>
                  <a href='#'>
                  <i className='icofont-heart'></i>
                  </a>
                  <Link to="/cart-page"> <i className='icofont-cart-alt'></i> </Link>
                </div>
              </div>
              {/* product thumb */}
              <div className='product-content'>
                <h5>
                <Link to={`/shop/${product.id}`}> {product.name} </Link>
                </h5>
                <p>
                  <Ratting/>
                </p>
                <h6>
                  ${product.price}
                </h6>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductCard