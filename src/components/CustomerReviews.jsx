import React from 'react';
import './CustomerReview.css';

const reviews = [
  {
    name: 'Arjun Mehta',
    username: '@arjun_crypto',
    image: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png',
    stars: 5,
    comment: 'This guide helped me 3x my portfolio in 2 months. Simple and effective strategies!'
  },
  {
    name: 'Neha Kapoor',
    username: '@neha_kapoor',
    image: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png',
    stars: 4,
    comment: 'Loved the breakdown of AI tools in crypto. It made investing so much easier.'
  },
  {
    name: 'Ravi Sinha',
    username: '@ravi_invests',
    image: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png',
    stars: 5,
    comment: 'I was new to crypto, but this PDF explained everything in Hindi-friendly terms. Totally worth it!'
  },
  {
    name: 'Pooja Sharma',
    username: '@pooja_wealth',
    image: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png',
    stars: 4,
    comment: 'Great tips on how to avoid crypto scams and pick coins early. Telegram group is a bonus!'
  },
];

const CustomerReview = () => {
  return (
    <section id="testimonials">
      <div className="testimonial-heading">
    
        <h4>Clients Says</h4>
      </div>
      <div className="testimonial-box-container">
        {reviews.map((user, index) => (
          <div className="testimonial-box" key={index}>
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={user.image} alt={user.name} />
                </div>
                <div className="name-user">
                  <strong>{user.name}</strong>
                  <span>{user.username}</span>
                </div>
              </div>
              <div className="reviews">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={i < user.stars ? 'fas fa-star' : 'far fa-star'}
                  ></i>
                ))}
              </div>
            </div>
            <div className="client-comment">
              <p>{user.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
