import React from 'react';
import './ProductPage.css';
import productImage from '../assets/productimg.png';

const ProductPage = () => {
  return (
    <div className="product-wrapper">
      <div className="product-card">
        {/* Product Image */}
        <div className="image-section">
          <img
            className="product-image"
            src={productImage}
            alt="Crypto Investment PDF"
          />
        </div>

        {/* Product Info */}
        <div className="info-section">
          <h2 className="product-title">Crypto Investment Master Guide</h2>

          <p className="product-description">
            Unlock the ultimate strategy to grow your wealth through cryptocurrency. This 50+ page premium PDF is designed for both beginners and seasoned investors.
          </p>

          <ul className="product-list">
            <li>🚀 Find high-potential coins early</li>
            <li>🔒 Avoid scams and rug-pulls</li>
            <li>📊 Short- & long-term strategies</li>
            <li>💎 Top 10 coins for 2025</li>
            <li>📤 Legal withdrawal & tax tips</li>
            <li>🤖 AI tools for crypto analysis</li>
          </ul>

          <p className="product-bonus">
            🎁 BONUS: Free access to our private Telegram group for daily market updates & expert tips!
          </p>

          <div className="product-price">Just ₹1999</div>

          <button className="buy-button">Buy Now</button>

          <div className="trust-badges">
            <span>🔐 Secure Checkout</span>
            <span>📥 Instant PDF</span>
            <span>📞 24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
