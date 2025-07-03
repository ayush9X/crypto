import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What is Crypto Investor EA?",
      answer: "It’s a PDF guide curated by experts to help you make smart crypto investments. Plus, you get access to our exclusive Telegram group."
    },
    {
      question: "What do I get after payment?",
      answer: "You instantly receive the PDF download link and access to our private Telegram group with crypto tips and ₹10,000 reward updates."
    },
    {
      question: "Is this a one-time payment?",
      answer: "Yes! ₹1999 is a one-time payment for lifetime access to the guide and community."
    },
    {
      question: "How do I join the Telegram group?",
      answer: "After successful payment, you’ll be redirected to the PDF and group invite link."
    },
    {
      question: "Can I get a refund?",
      answer: "We don’t offer refunds since it's a digital product. Please read the details before buying."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <h4 onClick={() => toggleQuestion(index)} className="faq-question">
              {item.question}
              <span className="faq-toggle">{activeIndex === index ? "−" : "+"}</span>
            </h4>
            {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
