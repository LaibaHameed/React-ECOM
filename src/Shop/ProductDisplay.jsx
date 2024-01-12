import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const desc = "Compared with other breads, like white bread, Ezekiel bread is high in protein, fiber, and various important nutrients.";

const ProductDisplay = ({item}) => {
    const {name,id,seller,price,ratingsCount,quantity,img} = item;

    const [preQuantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("set size");
    const [color, setColor] = useState("set color");

    const handleSizeChange = (e) => {
      setSize(e.target.value)
    }

    const handleColorChange = (e) => {
      setColor(e.target.value)
    }

    const handleIncrease = () => {
      setQuantity(preQuantity + 1)
    }

    const handleDecrease = () => {
      if(preQuantity > 1){
        setQuantity(preQuantity - 1)
      }
    }

    const handleSubmitBtn = (e) => {
      e.preventDefault();
      const product = {
        id: id,
        img: img,
        name: name,
        price: price,
        quantity: preQuantity,
        size: size,
        color: color,
        coupon: coupon
      }

      console.log(product)

      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProductIndex = existingCart.findIndex((item)=> item.id === id);
      if(existingProductIndex !== -1){
        existingCart[existingProductIndex].quantity += preQuantity;
      } else{
        existingCart.push(product);
      }

      // update local storage
      localStorage.setItem("cart", JSON.stringify(existingCart));

      // reset from fields
      setQuantity(1);
      setColor("Select Color");
      setSize("Select Size");
      setCoupon("");
    }

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className='rating'>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          {ratingsCount} Reviews
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>  
            {/* cart components  */}
      <div>
        <form onSubmit={handleSubmitBtn}>
          <div className='select-product size'>
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option >SM</option>
              <option >MD</option>
              <option >LG</option>
              <option >XL</option>
              <option >XXL</option>
            </select>
            <i className='icofont-rounded-down'></i>
          </div>
          <div className='select-product color'>
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option >pink</option>
              <option >black</option>
              <option >white</option>
              <option >bule</option>
              <option >brown</option>
            </select>
            <i className='icofont-rounded-down'></i>
          </div>
          {/* + - quantity */}
          <div className='cart-plus-minus'>
            <div className='dec qtybutton' onClick={handleDecrease}>-</div>
            <input className='cart-plus-minus-box' type='text' name='qtybutton' id='qtybutton' value={preQuantity} onChange={(e)=>setQuantity(parseInt(e.target.value, 10))} />
            <div className='inc qtybutton' onClick={handleIncrease}>+</div>
          </div>
          {/* coupon field */}
          <div className='discount-code mb-2'>
            <input type='text' placeholder='Enter Discount code' onChange={(e)=> setCoupon(e.target.value)} />
          </div>
          {/* btn section */}
          <button type='submit' className='lab-btn'>
            <span>Add to cart</span>
          </button>
          <Link to="/cart-page" className='lab-btn bg-primary'>
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ProductDisplay