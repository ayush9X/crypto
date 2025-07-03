import React from 'react';
import Banner from './Banner';
import Main from './Main';
import Timer from './Timer';
import Next from './Next';
import ProductPage from './ProductPage';
import SupportSection from './SupportSection';
import CustomerReview from './CustomerReviews';
import FAQ from './FAQ';
import ContactForm from './ContactForm';
// import Footer from './Footer';

const HomeLayout = () => {
  return (
    <>
      <section id="home"><Banner /></section>
      <Main />
      <Timer />
      <Next />

      <section id="product"><ProductPage /></section>
      <SupportSection />

      <section id="testimonials"><CustomerReview /></section>
      <section id="faq"><FAQ /></section>
      <section id="contact"><ContactForm /></section>

    </>
  );
};

export default HomeLayout;
