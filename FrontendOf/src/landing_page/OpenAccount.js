import React, { PureComponent } from 'react';
import SignupBtn from '../landing_page/signup/SignupBtn';

function OpenAccount() {
    return ( 
       <div className='container p-5 mb-5'>
          <div className='row text-center'>
            <h1 className='mt-2 opacity-10'> 
               Open a Zerodha account
            </h1>
            <p className='text-muted fs-5 mt-4' >  
               Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.  
            </p>
             <SignupBtn />
       </div>
    </div>  
     );
}

export default OpenAccount;