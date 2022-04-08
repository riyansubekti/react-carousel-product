import React from 'react'
import { ProductContext } from '../context/ProductContext';
import './ProductList.css'

const ProductList = () => {
  const { dataProducts, activeProduct, setActiveProduct, setActiveDetailThumb } = React.useContext(ProductContext);
  const handleClick = index => {
    setActiveProduct(index);
    setActiveDetailThumb(0);
  }

  return (
    <div className="section-product-list">
      <h2>List Products</h2>
      <div className="product-list">
        {
          dataProducts.map((item, index) => (
            <img className={activeProduct === index ? 'active' : ''} key={index} onClick={() => handleClick(index)} src={item.image} alt="" />
          ))
        }
      </div>
    </div>
  )
}

export default ProductList