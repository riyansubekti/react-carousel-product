import React from 'react'
import { ProductContext } from '../context/ProductContext';
import './Detail.css'
import Rating from './Rating';
import Thumbnail from './Thumbnail';

const Detail = () => {
  const { dataProducts, activeProduct, activeDetailThumb, setActiveDetailThumb } = React.useContext(ProductContext);
  const handlePrev = () => setActiveDetailThumb(value => {
    if (value === 0){
      return dataProducts[activeProduct].images.length - 1;
    }
    return value - 1;
  })
  const handleNext = () => setActiveDetailThumb(value => {
    if (value + 1 === dataProducts[activeProduct].images.length){
      return 0;
    }
    return value + 1;
  })

  return(
    <div className="detail">
      <div className="details">
        <div className="big-img">
          <img src={dataProducts[activeProduct].images[activeDetailThumb]} alt=""/>
          <div className="slide">
            <i onClick={handlePrev} className="fa-solid fa-caret-left"></i>
            {`${activeDetailThumb+1}/${dataProducts[activeProduct].images.length}`}
            <i onClick={handleNext} className="fa-solid fa-caret-right"></i>
          </div>
          <Thumbnail source={dataProducts[activeProduct].images} />
        </div>
        <div className="box">
          <b className="sale">SALE {dataProducts[activeProduct].off}</b>
          <div className="row">
            <h2>{dataProducts[activeProduct].name}</h2>
            <Rating value={dataProducts[activeProduct].rating} review={dataProducts[activeProduct].reviewCount} />
            <h1>{dataProducts[activeProduct].price}</h1>
          </div>
          <hr />
          <div className="btn-group">
            <button onClick={() => alert('Button Add To Cart')} className="btn-cart">
              <i className="fa-solid fa-cart-plus"></i>
              Add To Cart
            </button>
            <button onClick={() => alert('Button Buy Now')} className="btn-buy">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail