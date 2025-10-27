
import React from "react";
import "./Brokerage.css";

function Brokerage(){
    return(
        <div className="container">
            <div className="row text-center text-muted ">            
                <h4 style={{fontWeight:'400'}}>
                    <a href=''  style={{textDecoration:"none"}}>Calculate your costs upfront</a> using our brokerage calculator     
                </h4>
            </div> 

            <div className="row p-5  ">
                <h3 className="text-muted p-4">Charges explained</h3>

                <div className="col-6 p-4 ">
                    <h5  className="hs" >Securities/Commodities transaction tax</h5>
                    <p style={{fontSize:"13px"}}>
                        Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.<br/><br/>
                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                    </p><br/>

                    <h5  className="hs"> Transaction/Turnover Charges </h5>
                    <p className="ps">
                        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.<br/><br/>
                        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)<br/><br/>
                        BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.<br/><br/>
                        BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.<br/><br/>
                        BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                    </p>
                    <br/>

                    <h5 className="hs"> Call & trade </h5>
                    <p className="ps">
                        Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                    </p><br/>

                    <h5 className="hs"> Stamp charges </h5>
                    <p className="ps">
                        Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
                    </p><br/>

                    <h5  className="hs"> NRI brokerage charges</h5>
                    <p className="ps">
                        <ul>
                            <li>₹100 per order for futures and options. </li>
                            <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower). </li>
                            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower). </li>
                            <li>₹500 + GST as yearly account maintenance charges (AMC) charges. </li>
                        </ul>
                    </p><br/>

                    <h5  className="hs"> Account with debit balance </h5>
                    <p className="ps">
                        If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                    </p><br/>

                    <h5 className="hs" > Charges for Investor's Protection Fund Trust (IPFT) by NSE </h5>
                    <p className="ps">
                       <ul>
                           <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                            <li> Options - ₹50 per crore + GST traded value (premium value). </li>
                            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                       </ul>
                    </p><br/>

                    <h5 className="hs"> Margin Trading Facility (MTF)</h5>
                    <p className="ps">
                       <ul>
                        <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower. </li>
                        <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                       </ul>
                    </p>
                </div>

                <div className="col-6 p-4 ">
                    <h5 className="hs"> GST </h5>
                    <p className="ps">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges) </p><br/>
                     
                    <h5 className="hs"> SEBI Charges </h5>
                    <p className="ps">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets. </p> <br/>

                    <h5 className="hs"> DP (Depository participant) charges </h5>
                    <p className="ps">
                        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.<br/>
                        Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.<br/>
                        Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                    </p> <br/>

                    <h5  className="hs"> Pledging charges </h5>
                    <p className="ps">₹30 + GST per pledge request per ISIN. </p> <br/>

                    <h5  className="hs"> AMC (Account maintenance charges </h5>
                    <p className="ps">
                        For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here <br/>
                        For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here
                    </p> <br/>

                    <h5 className="hs"> Corporate action order charges </h5>
                    <p className="ps"> ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console. </p><br/>

                    <h5 className="hs"> Off-market transfer charges </h5>
                    <p className="ps"> ₹25 per transaction. </p><br/>

                    <h5 className="hs"> Physical CMR request </h5>
                    <p className="ps">First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests. </p><br/>

                    <h5 className="hs"> Payment gateway charges </h5>
                    <p className="ps">₹9 + GST (Not levied on transfers done via UPI) </p><br/>
                     
                    <h5 className="hs"> Delayed Payment Charges </h5>
                    <p className="ps">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more. </p><br/>

                    <h5 className="hs"> Trading using 3-in-1 account with block functionality </h5>
                    <p  className="ps">
                      <ul>
                           <li>Delivery & MTF Brokerage: 0.5% per executed order. </li>
                           <li> Intraday Brokerage: 0.05% per executed order.</li>
                      </ul>
                    </p><br/>
                </div>
            </div>
            <div className="row text-muted p-2" style={{marginLeft:" 10% auto"}}>            
                <h3 style={{fontSize:"17px"}}> Disclaimer </h3>
                <p className="ps">
                    For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
                </p>
            </div> 
        </div>        
    );
}
export default Brokerage;
