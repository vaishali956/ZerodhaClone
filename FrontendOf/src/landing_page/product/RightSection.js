import React from "react";

function RightSection({ 
      imageUrl, 
      productName, 
      productDescription,
      learnMore,
}){
    return(
        <div className="container " >
            <div className="row ">

                <div className="col-6 text-muted ">
                    <h1 style={{marginTop:" 10rem ", marginLeft:"20%"}}>{productName}</h1>

                    <p style={{margin:" 5% 20%", lineHeight:"1.8"}}>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration:"none", marginLeft:"20%" }} >
                            Learn More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                
                <div className="col-6 ">
                    <img src={imageUrl} style={{width:"100%"}}/>
                </div>
            </div>
        </div>
    );
}
export default RightSection;