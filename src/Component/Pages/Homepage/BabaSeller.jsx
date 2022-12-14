import React from "react"
import "./HomePage.css"
import "./HomPageResponsiveness.css"

export const Seller = ( ) => {
  return (
    <div className="seller-container">
  <div className="seller-child1">
    <div className="seller-content">
      <p>Sell on <span>AgroEase</span>, </p>
      <h3>Expand your reach</h3>
      <p>&amp;</p>
      <p>make profit</p>
      <button className="seller-btn">Learn More
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
          <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg></button>
    </div>
  </div>
  <div className="seller-child2">
    <img src="/assets/baba-seller.png" alt />
  </div>
</div>


  )
}