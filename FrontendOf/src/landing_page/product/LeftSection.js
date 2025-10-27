
import React from "react";

function LeftSection({
      imageUrl, 
      productName, 
      productDescription,
      tryDemo,
      learnMore,
      googlePlay,
      appStore
    }) {
    return(
        <div className="container p-5"  >
            <div className="row p-6  mt-5">

                 <div className="col-6 ">
                    <img src={imageUrl} />
                 </div>
                 
                 <div className="col-6 " style={{padding:"0 85px", lineHeight:"1.8"}}>
                    <h1 className="mt-3 text-muted " >{productName}</h1>
                    <p className="mt-4 fs-6 text-muted " >{productDescription}</p>

                    <div className="mb-4 text-muted  " >
                        <a href={tryDemo} style={{textDecoration:"none", fontWeight:"600", marginRight:"20%"}}>
                            Try Demo <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href={learnMore} style={{textDecoration:"none", fontWeight:"600"}}>
                            Learn More<i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                    <div>
                        <a href={googlePlay}>
                          <img src="media\images\googlePlayBadge.svg"/>
                        </a>
                        <a href={appStore} style={{marginLeft:"10%"}}>
                          <img src="media\images\appstoreBadge.svg"/>
                        </a>
                    </div>
                    
                 </div>
            </div>

        </div>
    );
}
export default LeftSection;