import React from 'react';
import sarah from '../assets/images/ProfileImage.png';
import './scss/Section.scss';

function Section() {
  return (
    <section className='section'>
      {/* <div className='section-container'> */}
        <img src={sarah} alt='Sarah Profile' />
        <div className='info'>
          <a href='/'>Sarah’s day care available now in North Sydney</a>
          <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Section;
