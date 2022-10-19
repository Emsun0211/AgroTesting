import React from "react"
import "./HomePage.css"
import "./HomPageResponsiveness.css"

export const Payment = () => {
  return (
   <div className="payment-partners">
  <div className="all-payment">
    <div className="all-payment-writeup">
      <h4>All Payments are secured by</h4>
    </div>
    <div className="pay-stack">
      <img src="/assets/paystack.png" alt />
    </div>
    <div className="pay">
      <img src="/assets/visa.png" alt />
      <img src="/assets/mastercard.png" alt />
      <img src="/assets/verve.png" alt />
      <img src="/assets/visa-electron.png" alt />
    </div>
  </div>
  <div className="partner-with">
    <h3>We are partners with</h3>
    <div className="partners">
      <div className="tiidelab">
        <img src="/assets/faologo.png" alt />
      </div>
      <div className="neca">
        <img src="/assets/federalmin.jpeg" alt />
      </div>
    </div>
  </div>
</div>

  )
}