import React, { useState } from "react";
import "../Css file/Donation.css";;

export default function Donation() {
  const [amount, setAmount] = useState(25);

  return (
    
    <div className="donation-page">
       <button className="back-btn" onClick={() => window.history.back()}>
         ← Back
         </button>
      <section className="donation-hero">
        <h1>Support FurEver Home</h1>
        <p>Your donation helps save lives and give pets a loving home.</p>
      </section>
      
         
      
      <section className="donation-section">
        <div className="donation-card">
          <h2>Make a Donation</h2>

       
          <div className="amount-options">
            {[10, 25, 50, 100].map((value) => (
              <button
                key={value}
                className={amount === value ? "active" : ""}
                onClick={() => setAmount(value)}
              >
                ${value}
              </button>
            ))}
          </div>

         
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Custom amount"
          />

         
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />

         
          <button className="donate-btn" onClick={() => alert(`Donating $${amount}`)}>Donate ${amount}</button>

          <p className="secure-text">🔒 100% Secure Donation</p>
        </div>
     
        <div className="donation-info">
          <h3>How your donation helps</h3>
          <ul>
            <li>🐶 Food & shelter for rescued pets</li>
            <li>💉 Medical care & vaccinations</li>
            <li>🏠 Adoption & rescue programs</li>
            <li>❤️ Long-term animal welfare</li>
          </ul>
        </div>
      </section>
       
    </div>
  );
}