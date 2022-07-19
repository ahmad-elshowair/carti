import React from 'react'

const Cart = ({cart, setCart}) => {

  const allProducts= cart.map((product) =>{
    return(
      <article key={product.id} className='product'>
        <div className='product-details'>
          <div className='product-details_image'>
            <img className='product-image' src={product.image} alt={product.name}/>
          </div>
          <div className='product-details_info'>
            <h3 className='product-details_info_name'>
              {product.name}
            </h3>
            <p className='product-details_info_description'>
              {product.description}
            </p>
            <span className='product-details_info_price'>
              {product.price}
            </span>
          </div>
        </div>
        {
          cart.includes(product) ?(
            <button 
              className='btn remove-cart'
              onClick={()=>setCart(cart.filter(p=> p.id !== product.id))}
            >
              Remove
            </button>
          ):(
            <button 
              className='btn add-cart'
              onClick={() => setCart([...cart, product])}
            >
              Add
            </button>

            
          ) 
        }
      </article>
    )
  })
  return (
    <section className='cart-section'>
      <div className='container'>
        <div className='cart-section_products'>

        
        {allProducts}
          <article className='cart-info'>
            <h3 className='cart-info_header'>
              Total: 
            </h3>
            <span>products: {cart.length}</span>
            <span>price: </span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Cart