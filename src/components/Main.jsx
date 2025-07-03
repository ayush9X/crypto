import React from 'react';
import './Hero.css';
import heroImage from '../assets/productimg.png'; // Make sure this image exists

function Main() {
  const handleBuyNow = async () => {
    try {
      const res = await fetch('http://localhost:5000/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await res.json();

      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // 🔁 Replace with your Razorpay Key ID
        amount: data.amount,
        currency: data.currency,
        name: 'Crypto Investor EA',
        description: 'Access PDF & Telegram group',
        order_id: data.orderId,
        handler: function (response) {
          alert('Payment Successful!');
          window.location.href = 'http://localhost:5000/download';
        },
        prefill: {
          name: 'Crypto Buyer',
          email: 'buyer@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#00c9ba'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error('Payment failed:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="hero-section">
      <section className="hero-content">
        <h1 className="hero-title">
          Crypto Investor EA
          <span>Your Path to Smart Crypto Profits</span>
        </h1>

        <p className="hero-subtitle">
          Buy our expert-curated PDF for just <strong>₹1999</strong> and unlock access to our private <strong>Telegram group</strong> — where you get exclusive crypto updates and rewards up to <strong>₹10,000</strong>.
        </p>

        <button className="hero-btn" onClick={handleBuyNow}>Buy Now – ₹1999</button>

        <p className="hero-note">*Access to rewards and group available after purchase.</p>
      </section>

      <div className="hero-image">
        <img src={heroImage} alt="Crypto Investor EA PDF" />
      </div>
    </main>
  );
}

export default Main;

