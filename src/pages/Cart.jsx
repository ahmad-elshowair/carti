import React, { useEffect, useState } from 'react'

const Cart = ({cart, setCart}) => {

  const [totalPrice, setTotalPrice] = useState();
  useEffect(() => {
    setTotalPrice(cart.reduce((prevValue, CurrValue)=> prevValue + Number(CurrValue.price), 0))
  }, [cart])
  
  const allProducts= cart.map((product) =>{
    return(
      <article key={product.id} className='cart-products_product'>
        <div className="container">
          <div className='product-details'>
            <div className='product-details_image'>
              <img className='details-image' src={product.image} alt={product.name}/>
            </div>
            <div className='product-details_info'>
              <h3 className='details-info_name'>
                {product.name}
              </h3>
              <p className='details-info_description'>
                {product.description}
              </p>
              <div className='btn-group'>
                <span className='details-info_price'>
                  {product.price}
                </span>
                <span 
                  className='btn-remove'
                  onClick={()=>setCart(cart.filter(p=> p.id !== product.id))}
                  >
                  Remove
              </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  })
  return (
    <section className='cart-section'>
      <div className='cart-section_products'>
        <article className='cart-info'>
          <div className="container">
            <div className='cart-info_box'>
              <h3 className='cart-info_header'>
                Total
              </h3>
              <div className="cart-info-total">
                <span className='cart-info_total-products'>products: {cart.length}</span>
                <span className='cart-info_total-price'>price: {totalPrice}</span>
              </div>
            </div>
          </div>
        </article>
        <div className='cart-products'>
          {allProducts}
        </div>
      </div>
    </section>
  )
}

export default Cart