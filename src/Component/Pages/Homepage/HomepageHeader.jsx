import React from "react"
import "./HomePage.css"
import "../../../style.css";
import "./HomPageResponsiveness.css"


export const Header = () => {
  return(
    <header>
      <div className="categories-home-section">
 {/* Aside section start*/}
  <div className="home-page-aside-list">
    <div className="categories-home">
      <ul>
        <li id="livestock">
          <a href="#ourMarket.html">
          </a><div className="categories-svg"><a href="#ourMarket.html">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg> Livestock
            </a>
          </div>
        </li>
        <li id="crops">
          <a href="#ourMarket.html">
          </a><div className="categories-svg"><a href="#ourMarket.html">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg> Crops
            </a>
          </div>
        </li>
        <li id="farmInput">
          <a href="#ourMarket.html">
          </a><div className="categories-svg"><a href="#ourMarket.html"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg> Farm Inputs
            </a>
          </div>
        </li>
        <li id="processed">
          <a href="#ourMarket.html">
            <div className="categories-svg">
              <svg xmlns="http://www.=w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg> Processed <span>Products</span>
            </div>
          </a>
        </li><li id="equipments">
          <a href="#ourMarket.html">
            <div className="categories-svg"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg> Equipments</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
   {/* Aside section ends */} 
  <div className="home-page-article">
    <div className="wrapper-article">
      <div className="wrapper-writeup">
        <h2>Buy fresh, high quality farm Produce at affordable rate</h2>
        <p>Have it delivered to your location</p>
      </div>
      <button id="buy-now-overlay">Buy Now <div className="buttn-buy-now"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg></div></button>
    </div>
    <div className="overlay">
      <div className="banner-images">
        <img className="mySlides" src="/assets/farming.jpg" alt="farming pix" /> 
      {/* <img className="mySlides" src="/assets/fruits-images.jpg" alt="agroease banner" /> 
       <img className="mySlides" src="/assets/lapy-images.jpg" alt="agroease banner" />
        <img className="mySlides" src="/assets/drone-watering.jpg" alt="agroease banner" />
          <img className="mySlides" src="/assets/maize-plantaion.jpg" alt="agroease banner" />  */}
      </div>
    </div>
  </div>
</div>

    </header>

  )
}