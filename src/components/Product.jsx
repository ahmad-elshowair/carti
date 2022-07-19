import React from 'react';
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
        <span className='product-name'>{product.name}</span>
        <span className='product-price'>{product.price}</span>
      </div>
      {
          cart.includes(product) ?(
            <button 
              className='btn remove-cart'
              onClick={()=>removeFromCart(product.id)}
            >
              Remove
            </button>
          ):(
            <button 
              className='btn add-cart'
              onClick={() => addToCart()}
            >
              Add
            </button>

            
          ) 
        }
    </article>
  )
}

export default Product