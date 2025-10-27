import React from "react";
import SignupBtn from '../signup/SignupBtn';

function SignupPage(){
    return(
        <div className="container  ">
            <div className="row p-3 mt-5 text-center text-muted" >
                <h1 style={{fontSize:"44px"}}>
                    Open a free demat and trading account online
                </h1> 
                <h5 className="fs-5 mt-4 mb-5">Start investing brokerage free and join a community of 1.6+ crore investors and traders</h5>
            </div>
            <div className="row p-5 text-muted " >
                <div className="col-5  text-center">
                    <img src="media\images\account_open.svg " alt="not found"
                      style={{borderRadius:"10%", width:"100%"}}>
                    </img>       
                </div>
                <div className="col-2"></div>
                <div className="col-5 ">      
                    <h1 className=" text-muted  "> Signup Now</h1>
                    <p className="fs-5  text-muted">Or track your existing application</p>
                    <br/>
                    <label for="phone"> 
                        Enter your mobile no.<br/>
                         <input type="tel" placeholder="enter your number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" style={{width:"100%", height:"100%"}} id="phone" name="phone"/>
                    </label>
                     <br/>
                    <SignupBtn />

                    <br/><br/> 
                    <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
                </div>
            </div>
            <br/><br/>
            <div className="row p-5 text-muted " style={{justifyContent:"center", display:"flex"}}>
                <h1 style={{textAlign:"center"}}>Investment options with Zerodha demat account</h1>
                <div className="col-5 mt-5 text-center">
                    <img src="https://zerodha.com/static/images/stocks-acop.svg" alt=""></img>     
                    <h3> Stocks </h3>    
                    <p> Invest in all exchange-listed securities </p>  
                    <br/><br/>
                    <img src="https://zerodha.com/static/images/ipo-acop.svg " alt=""></img>
                    <h3> IPO </h3>
                    <p> Apply to the latest IPOs instantly via UPI </p>
                </div>
                <div className="col-2"></div>
                <div className="col-5 mt-5"> 
                     <img src="https://zerodha.com/static/images/mf-acop.svg " alt=""></img>
                    <h3> Mutual funds </h3>    
                    <p> Invest in commission-free direct mutual funds </p>
                    <br/><br/>
                    <img src="https://zerodha.com/static/images/fo-acop.svg " alt=""></img>
                    <h3> Futures & options </h3>
                    <p style={{}}>Hedge and mitigate market risk through simplified F&O trading </p>
                </div>
            </div>
        </div>
    );
}
export default SignupPage;