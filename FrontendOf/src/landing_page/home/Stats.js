import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'> 
                <div className='col-6 p-5'>
                    <h1 className='mb-5'>Trust with confidence</h1> 
                    <h3 className='fs-5 '>Customer-first always</h3>
                      <p className='mb-4 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India. </p>
                    <h3 className='fs-5'>No spam or gimmicks</h3>
                       <p className='mb-4 text-muted'> No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies. </p>
                    <h3 className='fs-5'>The Zerodha universe</h3>
                       <p className='mb-4 text-muted'> Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs. </p>
                    <h3 className='fs-5'>Do better with money</h3>
                       <p className='mb-4 text-muted'> With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money. </p>
                </div>
                <div className='col-6 p-5'> 
                    <img src="media\images\ecosystem.png" alt="error" style={{width:"95%"}}></img>
                    <div className='text-center'>
                        <a href="" className='mx-4' style={{textDecoration:"none", fontWeight:"500"}}> Explore our products <i class="fa-solid fa-arrow-right"></i> </a>
                        <a href="" style={{textDecoration:"none", fontWeight:"500"}}> Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Stats;