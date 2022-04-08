import React from 'react'
import './Rating.css'

const Rating = ({ value, review }) => {
  const starsTotal = 5;
  const starPercentage = (value / starsTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    <div className="rating">
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
      </div>
      <span className="number-rating">({review} Reviewers)</span>
    </div>
  )
}

export default Rating