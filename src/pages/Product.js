import React, { useState } from 'react'
import Detail from '../components/Detail'
import ProductList from '../components/ProductList'
import { ProductContext } from '../context/ProductContext'

const Product = ({ dataProducts }) => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeDetailThumb, setActiveDetailThumb] = useState(0);
  
  return (
    <div id="product">
      <ProductContext.Provider value={{
        activeProduct,
        setActiveProduct,
        activeDetailThumb,
        setActiveDetailThumb,
        dataProducts
      }}>
        <ProductList />
        <Detail />
      </ProductContext.Provider>
    </div>
  )
}

export default Product