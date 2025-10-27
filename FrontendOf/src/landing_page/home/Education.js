import React from 'react';

function Education() {
  return (
      <div className='container mt-5 p-5'>
          <div className='row'> 
                
            <div className='col-6 p-3'> 
                    <img src="media\images\education.svg" alt="error" style={{width:"90%"}}></img>
            </div>
            <div className='col-6 p-5'>
                    <h1 className='mb-5 fs-2'>Free and open market education</h1> 
                      <p className='mb-4 '>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading. </p>
                      <a href="" style={{textDecoration:"none", fontWeight:"500"}} > Varsity  <i class="fa-solid fa-arrow-right"></i></a>
                       
                      <p className='mb-4 mt-4'> TradingQ&A, the most active trading and investment community in India for all your market related queries. </p>
                      <a href="" style={{textDecoration:"none", fontWeight:"500"}}>  Trading Q&A  <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>   
  );
}

export default Education;