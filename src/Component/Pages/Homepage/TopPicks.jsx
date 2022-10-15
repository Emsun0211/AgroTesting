import React from "react"
import "./HomePage.css"
import "../../../style.css";
import "./HomPageResponsiveness.css"


export function TopPicks () {
  return (
    <>
<div className="containers" id="ourMarket.html">
  <h2>TOP PICKS</h2>
  <div className="container-card">
    <div className="card">
      <div className="bag">
        <img src="/assets/rice-bag.png" alt ="images" />
      </div>
      <div className="price">
        <h3>Rice</h3>
        <p>Better than foriegn rice</p>
        <span>Seller: Agroease</span>
        <h4>Price:
          <delete>N40,000</delete>
        </h4>
        <div className="share">
          <div className="carte" id="carte">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 
      0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
       .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415
        11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01
         3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479
          9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2
           2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
            1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
             1 0 0 1 0-2z" />
            </svg>
          </div>
          <div className="by-me">
            <button id="buy">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="bag">
        <img src="/assets/red oil.jpg" height={220} width={320} alt ="images"/>
      </div>
      <div className="price">
        <h3>Palm Oil</h3>
        <p>Best Red oil</p>
        <span>Seller: <i>Sold</i></span>
        <h4>Price:<del>N15,000</del> </h4>
        <div className="share">
          <div className="carte" id="carte">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 
          0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
           .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415
            11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01
             3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479
              9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2
               2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
                1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                 1 0 0 1 0-2z" />
            </svg>
          </div>
          <div className="by-me">
            <button id="buy">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="bag">
        <img src="/assets/cocoa.jpg" height={220} width={320} alt ="images"/>
      </div>
      <div className="price">
        <h3>Cocoa</h3>
        <p> Best Quality Cocoa</p>
        <span>Seller: <i>Sold</i></span>
        <h4>Price: <del>N20,000</del>
          <div className="share">
            <div className="carte" oid="carte">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 
          0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
           .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415
            11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01
             3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479
              9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2
               2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
                1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                 1 0 0 1 0-2z" />
              </svg>
            </div>
            <div className="by-me">
              <button id="buy">Buy Now</button>
            </div>
          </div>
        </h4></div>
    </div>
  </div>
</div>
<div class="pagenumbers" id="pagination"> </div>

</>


  )
}