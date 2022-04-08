import React from 'react'
import { ProductContext } from '../context/ProductContext';
import './Thumbnail.css'

const Thumbnail = ({ source }) => {
  const { activeDetailThumb, setActiveDetailThumb } = React.useContext(ProductContext);
  const handleClick = index => setActiveDetailThumb(index);

  return (
    <div className="thumb">
      {
        source.map((item, index) => (
          <img key={index} onClick={() => handleClick(index)} className={activeDetailThumb === index ? 'active' : ''} src={item} alt="" />
        ))
      }
    </div>
  )
}

export default Thumbnail