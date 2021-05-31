import React, { useEffect, useState } from 'react';
import Header from './Header';
import './scss/Banner.scss';
import banner from '../assets/images/ImageHeader.png';
import { play } from '../assets/vectors';

function Banner() {
  const [ABTest, setABTest] = useState(
    parseInt(localStorage.getItem('AB'), 10)
  );

  useEffect(() => {
    if (Number.isNaN(ABTest)) {
      const ABValue = Math.floor(Math.random() * 2);
      localStorage.setItem('AB', ABValue);
      setABTest(parseInt(localStorage.getItem('AB'), 10));
    }
  });

  return (
    <section className='banner'>
      <Header />
      <div className='banner-wrap'>
        <article>
          <h1>
            {ABTest
              ? 'Easily create or join a local nanny share with Hapu'
              : 'Create the childcare you need at a price you can afford'}
          </h1>
          <p>
            {ABTest
              ? 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.'
              : 'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.'}
          </p>
          <div>
            <img src={play} alt='' />
            <a href='/'>See hapu in action (27 seconds)</a>
          </div>
        </article>
        <img className='banner-img' src={banner} alt='Baner' />
      </div>
    </section>
  );
}

export default Banner;
