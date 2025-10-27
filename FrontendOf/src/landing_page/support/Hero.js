
import React from "react";

function Hero(){
    return(
        <section className="container-fluid" id="supportHero">
               <div className=" row  " id="supportWrapper">
                   <div className=" col-6 ">
                         <h5 className="has"> Support Portal</h5>
                   </div>
                   <div className=" col-6 ">
                       <a href=" " className="has"> Track tickets </a>
                   </div>
                </div>
                <div className="row p-3 mx-5">
                     <div className="col-6 ">
                        <h3 className="f5-5 mb-5">Search for an answer or browse help topics to create a ticket</h3>
                        <input type="text" className="mb-4"
                           placeholder="Eg how do i activate F&O...">
                        </input><br/>
                         <a href=""> Track account opening </a> &nbsp;&nbsp;&nbsp;&nbsp;
                         <a href=""> Track segment activation </a>&nbsp;&nbsp;&nbsp;&nbsp;
                         <a href=""> Intraday margins </a>&nbsp;&nbsp;&nbsp;&nbsp;
                         <a href=""> Kite user manual </a>&nbsp;&nbsp;&nbsp;&nbsp;
                     </div>
                     <div className="col-6 ">
                         <h1 className="fs-3 mb-4">Featured</h1>
                         <ol>
                            <li>
                                <a href=" ">Surveillance measure on scrips - June 2025 </a>
                            </li>
                            <br/>
                            <li>
                                <a href=" ">Rights Entitlements listing in June 2025 </a>
                            </li>
                         </ol>
                         
                     </div>
                </div>
            </section>
    );
}
export default Hero;