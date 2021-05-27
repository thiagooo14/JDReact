import React from 'react';
import Header from './Header';
import './scss/Banner.scss';
import banner from '../assets/images/banner_modal.png';
import { play } from '../assets/vectors';

function Banner() {
  return (
    <section className='banner'>
      <Header />
      <div className='banner-wrap'>
        <article>
          {/* tentar fazer A/B mais tarde */}
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
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
