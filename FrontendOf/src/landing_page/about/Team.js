
import React from "react";

function Team(){
    return(
        <div className="container">
             <div className="row p-3 mt-5 " >
                <div className="row p-5 border-bottom" >
                <h1 className="fs-2 text-center text-muted">
                    We pioneered the discount broking model in India.
                    <br/>
                    Now, we are breaking ground with our technology.
                </h1>
                </div>
                <h1 className="text-center text-muted mt-4 ">
                    People
                </h1>
             </div>
             <div className="row p-3 text-muted "
                style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className="col-6 p-3 text-center">
                    <img src="media\images\myPicture_page-0001.jpg" alt="My Image"
                      style={{borderRadius:"100%", width:"60%"}}>
                    </img>
                    <h4 className="mt-4">Vaishali Patel</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col-6 p-5">
                    <p>
                       Vaishali bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>  
                    <p>
                        She is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is her zen.
                    </p>
                        
                    <p>
                        Connect on 
                        <a style={{textDecoration:"none"}}> Homepage </a>/
                        <a style={{textDecoration:"none"}}> TradingQnA </a> / 
                        <a style={{textDecoration:"none"}}> Twitter </a> 
                    </p>
                </div>
             </div>
        </div>
    );
}
export default Team;