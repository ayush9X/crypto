import React from 'react';
import './SupportSection.css';
import { FaHeadphonesAlt, FaUserShield, FaDownload, FaBook, FaUndo, FaUserFriends } from 'react-icons/fa';

const features = [
  {
    icon: <FaDownload />,
    title: "Easy Installation Files",
    desc: "Crypto Investor EA comes with a point-and-click installation wizard. Just double-click the wizard, and let it do the rest!",
  },
  {
    icon: <FaUserShield />,
    title: "Access to Members-Only Area",
    desc: "Access all files, tutorials, and documentation from our exclusive member area after payment.",
  },
  {
    icon: <FaHeadphonesAlt />,
    title: "24/7 Support",
    desc: "Our team of specialists is available 24/7 to assist with any queries you may have.",
  },
  {
    icon: <FaBook />,
    title: "Detailed Quick Start Guide",
    desc: "Step-by-step instructions to help you use Crypto Investor EA with best practices.",
  },
  {
    icon: <FaUndo />,
    title: "30-Day Money-Back Guarantee",
    desc: "Try it risk-free for 30 days. If you're not satisfied, get a full refund — no questions asked.",
  },
  {
    icon: <FaUserFriends />,
    title: "1 Real and 10 Demo Accounts",
    desc: "Use Crypto Investor EA on 1 real account and up to 10 demo accounts simultaneously.",
  }
];

function SupportSection() {
  return (
    <section className="support-section">
      <div className="support-header">
        <h2><span className="highlight">SUPPORT</span> YOU NEED</h2>
        <p>We've made it easy for you to get the support you need. As a Crypto Investor EA member, you will get:</p>
      </div>
      <div className="support-grid">
        {features.map((item, index) => (
          <div key={index} className="support-item">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SupportSection;
