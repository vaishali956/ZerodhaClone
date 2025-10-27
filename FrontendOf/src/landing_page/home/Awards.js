import React from 'react';
 function Awards() {
    return ( 
        <div className='container mt-2'>
            <div className='row'>
                <div className='col-lg-6  col-sm-12 p-5'>
                    <img src='media\images\largestBroker.svg' alt='error'></img>
                </div>
                <div className='col-6 p-5 mt-2'>
                    <h1 className='mb-4'>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                     
                    <div className='row '>
                        <div className='col-6'>
                           <ul>
                              <li> <p> Future and options</p> </li>
                              <li> <p> Commodative derivatives </p> </li>
                              <li> <p> Currency derivatives</p> </li>
                           </ul>
                        </div>
                       <div className='col-6'>
                           <ul>
                              <li> <p> Stocks and IPOs</p> </li>
                              <li> <p> Direct mutual funds </p> </li>
                              <li> <p> Bonds and Government security</p> </li>
                           </ul>
                        </div>
                    </div>
                    <img src='media\images\pressLogos.png' alt='error' style={{width:'90%', marginTop:"5%"}}></img>
                </div>
            </div>
        </div>
     );
 }
 
 export default Awards;