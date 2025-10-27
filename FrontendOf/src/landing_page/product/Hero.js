
import React from "react";

function Hero(){
    return(
        <div className="container border-bottom " style={{padding:"6%"}}>
           <div className="text-center P-5" >
            <h1>
                 Zerodha Products
            </h1>
            <h3 className="text-muted mt-4 fs-4">
                Sleek, modern, and intuitive trading platforms
            </h3>
            <p className="mt-4">
                  Check out our <a href="" style={{textDecoration:"none", fontWeight:"500"}}> investment offering <i class="fa-solid fa-arrow-right"></i></a>
            </p>
           </div>
           
        </div>
    );
}
export default Hero;