import React from "react";
import SignupBtn from '../signup/SignupBtn';

function Universe(){
    return(
        <div className="container mt-5 mb-5" >
            <div className="row ">
                <h1 className="text-center mb-4 text-muted"> The Zerodha Universe </h1>
                <p className="text-center">
                    Extend your trading and investment experience even further with our partner platforms
                </p>
                <div className="row ">
                        <div className="col-4 p-5 mt-4">
                            <img src="media\images\zerodhaFundhouse.png " style={{width:"50%"}}/>
                            <p className="text-small text-muted" style={{marginTop:"5%"}}> 
                              Our assest management venture that is creating simple and transparent index funds to help you save for your goals.
                            </p>
                        </div>
                        <div className="col-4 p-5 mt-4">
                           <img src="media\images\sensibullLogo.svg " style={{width:"50%"}}/>
                            <p className="text-small text-muted" style={{marginTop:"10%"}}> 
                               Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                            </p>
                        </div>
                        <div className="col-4 p-5 mt-4">
                            <img src="media\images\goldenpiLogo.png " style={{width:"50%"}}/>
                            <p className="text-small text-muted" style={{marginTop:"5%"}}> 
                               Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                            </p>
                        </div>
                </div>
                <div className="row ">
                    <div className="col-4 p-5 mt-4">
                       <img src= "media\images\streakLogo.png " style={{width:"40%"}} />
                          <br/><br/>
                       <p className="text-small text-muted " style={{marginTop:"4%"}}> 
                        Systematic trading platform that allows you to create and backtest strategies without coding.
                       </p>
                    </div>
                    <div className="col-4 p-5 mt-4">   
                       <img src="media\images\smallcaseLogo.png"style={{width:"50%"}} />
                          <br/><br/>
                       <p className="text-small text-muted" style={{marginTop:"5%"}}> 
                          Thematic investing plateform that helps you invest in diversified baskets of stocks on ETFs.
                        </p>
                    </div>
                    <div className="col-4 p-5 mt-4">
                        <img src="media\images\dittoLogo.png"style={{width:"40%"}} />
                          <br/><br/>
                        <p className="text-small text-muted " style={{marginTop:"3%"}}> 
                          Personalized advice on life and health insurance. No spam and no mis-selling.
                        </p>
                    </div>

                </div>
                <SignupBtn />
                
                
            </div>
        </div>
    );
}
export default Universe;