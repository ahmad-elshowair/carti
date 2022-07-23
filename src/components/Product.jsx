import React, { useContext } from 'react';
import { CartContext } from '../Context';
const Product = ({product}) => {

  const {cart, setCart} = useContext(CartContext)
  return (
    <article className='product'>
      <div className="product-image">
        <img className='image'src={`${product.image}`} alt={`${product.name}`}/>
      </div>
      <div className="product-info">
        <span className='product-name'>{product.name}</span>
        <span className='product-price'>{product.price}</span>
      </div>
      {
          cart.includes(product) ?(
            <button 
              className='btn remove-cart'
              onClick={()=>setCart(cart.filter(c=> c.id !== product.id))}
            >
              Remove
            </button>
          ):(
            <button 
              className='btn add-cart'
              onClick={() =>setCart([...cart, product])}
            >
              Add
            </button>

            
          ) 
        }
    </article>
  )
}

export default Product