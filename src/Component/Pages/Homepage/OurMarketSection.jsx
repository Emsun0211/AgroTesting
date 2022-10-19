import React from "react"
import "./HomePage.css"
import "../../../style.css";
import "./HomPageResponsiveness.css"

const products = [
  {id: 1,
    name: "Day Old Commercial Turkey",
    desc: "Day Old  Turkey (Nicholas brand)",
    price: "3,500",
    image: "/assets/Day-old-Turkeys.jpg",
  },
  {
    id: 2,
    name: "Rice",
    desc: "Nigerian made rice",
    price: "30,000",
    image: "/assets/rice-bag.png",
  },
  {
    id: 3,
    name: "Garri",
    desc: "Quality Local Garri",
    price: "20,000",
    image: "/assets/garri.jpg",
  },

  {
    id: 4,
    name: "Palm Oil",
    desc: "Best Red oil",
    price: "15,000",
    image: "/assets/red oil.jpg",
  },
  {
    id: 5,
    name: "Yam",
    desc: "Big Yams",
    price: "3,000",
    image: "/assets/yam.jpg",
  },
  {
    id: 6,
    name: "Turkey",
    desc: "Big Turkey",
    price: "8,000",
    image: "/assets/turkey.jpg",
  },
  {
    id: 7,
    name: "Broillers",
    desc: "Broiler Birds",
    price: "5,000",
    image: "/assets/broilers.jpg",
  },
  {
    id: 8,
    name: "Cow",
    desc: "Nigeria Trained Cows",
    price: "120,000",
    image: "/assets/cows.png",
  },
  {
    id: 9,
    name: "Cocoa",
    desc: "Best Quality Cocoa",
    price: "20,000",
    image: "/assets/cocoa.jpg",
  },
  
];


export function OurMarketMain () {
  return (
  <div>

<div className="containers" id="ourMarket.html">
  <h2>Our Market</h2>
  <div className="container-card">

      {
        products.map((data , idx)=>{
          return (
            <div className="card">
            <div className="bag">
            <img src={data.image} alt ="" />
          </div>
          <div className="price">
            <h3>{data.name}</h3>
            <p>{data.desc} </p>
            <span>Seller: Agroease</span>
            <h4>Price:{data.price}
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
          )
        })
        
      }
     
        </div>
      </div>
  
</div>



  )
}