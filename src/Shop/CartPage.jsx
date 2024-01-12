import React, { useEffect, useState } from 'react'
import PageHeader from '../Components/PageHeader';
import { Link } from 'react-router-dom';
import delImageUrl from '../assets/images/shop/del.png';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, [])

  // calculate Prices
  const calculateTotalPrice = (item) => { 
    let price = item.price * item.quantity;
    return price;
  }

  // handle increase Qunatity
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems])

    // update local Storage with new cart items 
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  // handle decrease  Qunatity
  const handleDecrease = (item) => {
    if(item.quantity > 1){
      item.quantity -= 1;
      setCartItems([...cartItems])
    }
    
    // update local Storage with new cart items 
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

    // handle Delete  item
    const handleDeleteItem = (item) => {
      const updateCart =  cartItems.filter((cartItem)=> cartItem.id !== item.id);

      // update new cart 
      setCartItems(updateCart);
      updateLocalStorage(updateCart);
    }

    const updateLocalStorage = (cart)=>{
      localStorage.setItem("cart" , JSON.stringify(cart));
    }

    // cart sub total
    const cartSubTotal = cartItems.reduce((total, item )=>{
      let price = total + calculateTotalPrice(item);
      return price;
    }, 0);

    // order total 
    const orderTotal = cartSubTotal;
  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Shop Cart"}/>

      <div className='shop-cart padding-tb'>
        <div className='container'>
          <div className='section-wrapper'>
            {/* cart top */}
            <div className='cart-top'>
              <table>
                <thead>
                  <tr>
                    <th className='cat-product'>Product</th>
                    <th className='cat-price'>Price</th>
                    <th className='cat-quantity'>Quantity</th>
                    <th className='cat-toprice'>Total</th>
                    <th className='cat-edit'>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item, indx)=>(
                      <tr key={indx}>
                        <td className='product-item cat-product'>
                          <div className='p-thumb'>
                            <Link to="/shop"> <img src={item.img} alt=''/> </Link>
                          </div>
                          <div className='p-content'>
                            <Link to="/shop">{item.name}</Link>
                          </div>
                        </td>
                        <td className='cat-price'>
                          ${item.price}
                        </td>
                        <td className='cat-quantity'>
                        <div className='cart-plus-minus'>
                          <div className='dec qtybutton' onClick={()=> handleDecrease(item)}>-</div>
                          <input className='cart-plus-minus-box' type='text' name='qtybutton' id='qtybutton' value={item.quantity} />
                          <div className='inc qtybutton' onClick={()=> handleIncrease(item)}>+</div>
                          </div>
                        </td>
                        <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                        <td className='cat-edit'>
                          <a href='#' onClick={()=> handleDeleteItem(item)}>
                            <img src={delImageUrl} alt='del'/>
                          </a>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            {/* cart end */}
            {/* cart bottom */}
            <div className='cart-bottom'>
              {/* checkout box */}
              <div className='cart-checkout-box'>
                <form className='coupon'>
                  <input className='cart-page-input-text' type='text' name='coupon' id='coupon' placeholder='Coupon Code .....' />
                  <input type='submit' value="Apply Coupon" />
                </form>
                <form className='cart-checkout'>
                  <input type='submit' value="Update Cart" />
                  <div> Checkout Page </div>
                </form>
              </div>
              {/* checkout box ends */}
              {/* shopping box */}
              <div className='shiping-box'>
                <div className='row'>
                  <div className='col-md-6 col-12'>
                    <div className='calculate-shiping'>
                      <h3>Calculate shiping</h3>
                      <div className='outline-select'>
                        <select>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pak">Pakistan</option>
                          <option value="ind">India</option>
                          <option value="np">Nipal</option>
                        </select>
                        <span className='select-icon'>
                          <i className='icofont-rounded-down'></i>
                        </span>
                      </div>
                      <div className='outline-select shipping-select'>
                      <select>
                          <option value="uk">New York</option>
                          <option value="bd">Dakha</option>
                          <option value="pak">Islamabad</option>
                          <option value="ind">New Dehli</option>
                          <option value="np">Kathmandu</option>
                        </select>
                        <span className='select-icon'>
                          <i className='icofont-rounded-down'></i>
                        </span>
                      </div>
                      <input type='text' name='postalCode' id='postalCode' placeholder='Postcode/Zip*' className='cart-page-input-text' />
                      <button type='submit'>Update Address</button>
                    </div>
                  </div>

                  <div className='col-md-6 col-12'>
                    <div className='cart-overview'>
                      <h3>Cart Totals</h3>
                      <ul className='lab-ul'>
                        <li>
                          <span className='pull-left'>Cart SubTotal</span>
                          <p className='pull-right'>${cartSubTotal}</p>
                        </li>
                        <li>
                          <span className='pull-left'> Shipping and Handling</span>
                          <p className='pull-right'>Free Shipping</p>
                        </li>
                        <li>
                          <span className='pull-left'>Order Total</span>
                          {/* <p className='pull-right'>${orderTotal.toFixed(2)}</p> */}
                          <p className='pull-right'>${orderTotal.toFixed(2) }</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* shopping box ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage