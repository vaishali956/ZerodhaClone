import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupBtn from '../signup/SignupBtn';

function Hero() {
  

  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src='media/images/homeHero.png' alt='Hero Image' className='' style={{width:"70%", margin:"auto"}}/> 

        <h1 className='mt-5 opacity-10'> Invest in everything </h1>
        <p className='text-muted fs-5' > Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds and more.</p>

        <SignupBtn />

      </div>
    </div>  
  );
}

export default Hero;