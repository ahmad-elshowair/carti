import React from 'react'
import {TbShoppingCartPlus, TbShoppingCartX} from 'react-icons/tb'
const Product = ({product, cart, setCart}) => {

  const addToCart = ()=>{
    setCart([...cart, product]);
  }

  const removeFromCart = (productId) =>{
    setCart(cart.filter(product=> product.id !== productId))
  };
  return (
    <article className='product'>
      <div className="product-image">
        <img className='image'src={`${product.image}`} alt={`${product.name}`}/>
      </div>
      <div className="product-info">
        <p className='product-name'>{product.name}</p>
        <span className='product-price'>{product.price}</span>
        {
          cart.includes(product) ?(
            <button 
              className='btn remove-cart'
              onClick={()=>removeFromCart(product.id)}
            >
              <TbShoppingCartX/>
            </button>
          ):(
            <button 
              className='btn add-cart'
              onClick={() => addToCart()}
            >
              <TbShoppingCartPlus/>
            </button>

            
          ) 
        }
        
      </div>
    </article>
  )
}

export default Product