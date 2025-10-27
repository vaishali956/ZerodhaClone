import React from 'react';

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}>
    <div className='container border-top mt-5'>
      <div className='row mt-5'>
          <div className='col'> 
            <img src="media/images/logo.svg"  style={{width:"10rem"}} alt='logo'></img> 
            <p className='mt-4'> 
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className='col text-muted' > 
              <h5 >Account</h5><br/>
                  <a href=" # " style={{textDecoration:"none", color:"black", opacity:"0.6",fontWeight:"400" }}> Open demat account   </a>
                  <br/> <br/>
                  <a href=" # " style={{textDecoration:"none", color:"black", opacity:"0.6",fontWeight:"400"}}> Minor demat account  </a>
                  <br/><br/>
                  <a href=" # " style={{textDecoration:"none", color:"black", opacity:"0.6",fontWeight:"400"}}> NRI demat account  </a>
                  <br/><br/>
                  <a href=" # " style={{textDecoration:"none", color:"black", opacity:"0.6",fontWeight:"400"}}>  Commodity </a>
                  <br/><br/>
                  <a href=" # " style={{textDecoration:"none", color:"black", opacity:"0.6",fontWeight:"400"}}> Dematerialisation  </a>
                  <br/><br/>
                  <a href=" # " style={{textDecoration:"none", color:"black", opacity:"0.6",fontWeight:"400"}}> Fund transfer  </a>
                  <br/><br/>
                  <a href=" # " style={{textDecoration:"none", color:"black", opacity:"0.6",fontWeight:"400"}}> MTF  </a>
                  <br/><br/>
                  <a href=" # " style={{textDecoration:"none", color:"black", opacity:"0.6",fontWeight:"400"}}> Referral program  </a>
          </div>
          <div className='col text-muted'> 
              <h5>Support</h5> <br/>
                <a href='' style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>  Contact us </a>  
                <br/> <br/>      
                <a href='' style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}> Support portal </a>
                <br/><br/>
                <a href='' style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}> How to file a complaint? </a>
                <br/><br/>
                <a href='' style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}> Status of your complaints </a>
                <br/><br/>
                <a href='' style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>  Bulletin </a>
                <br/><br/>
                <a href='' style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>  Circular </a>
                <br/><br/>
                <a href='' style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>  Z-Connect blog </a>
                <br/><br/>
                <a href='' style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>  Downloads </a>  
          </div>
          <div className='col text-muted'> 
               <h5>Company</h5> <br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>    About  </a>
                   <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>    Philosophy </a>
                  <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>    Press & media </a>
                  <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>    Careers </a>
                  <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>    Zerodha Cares (CSR) </a>
                  <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>    Zerodha.tech </a>
                  <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}}>    Open source </a>                 
          </div>
          <div className='col text-muted '> 
              <h5>Quick links</h5> <br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}} >  Upcoming IPOs  </a>
                  <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}} > Brokerage charges </a>
                  <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}} >  Market holidays </a>
                  <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}} >  Economic calendar </a>
                  <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}} >  Calculators (CSR) </a>
                  <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}} >   Markets </a>
                  <br/><br/>
                  <a href="" style={{textDecoration:"none", color:"black", fontSize:"15px", opacity:"0.6",fontWeight:"400"}} >   Sectors </a>         
          </div>
      </div>

      <div className='mt-5  text-muted' style={{fontSize:"13px"}}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on <span style={{color:"blue"}}>SEBI SCORES</span> SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
        </p>
        <p>
          <span style={{color:"blue"}}> Smart Online Dispute Resolution | Grievances Redressal Mechanism </span>
        </p>
        <p> 
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </p> 
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
        </p>
      </div>
       <div className=' text-muted mb-4 text-center' >
          <a href=" " style={{textDecoration:"none", color:"black", opacity:"0.6"}} >  NSE </a> &nbsp;
          <a href=" " style={{textDecoration:"none", color:"black", opacity:"0.6"}} > BSE </a> &ensp;
          <a href=" " style={{textDecoration:"none", color:"black" , opacity:"0.6"}} > MCX </a> &ensp;
          <a href=" " style={{textDecoration:"none", color:"black" , opacity:"0.6"}} > Terms & conditions </a> &ensp;
          <a href=" " style={{textDecoration:"none", color:"black" , opacity:"0.6"}} > Policies & procedures </a> &ensp;
          <a href=" " style={{textDecoration:"none", color:"black" , opacity:"0.6"}} > Privacy policy </a> &ensp;
          <a href=" " style={{textDecoration:"none", color:"black" , opacity:"0.6"}} > Disclosure </a>&ensp;
          <a href=" " style={{textDecoration:"none", color:"black" , opacity:"0.6"}} > For investor's attention </a> &ensp;
          <a href=" " style={{textDecoration:"none", color:"black" , opacity:"0.6"}} > Investor charters </a>&ensp;
       </div>
    </div>
    </footer>
  );
}

export default Footer;
