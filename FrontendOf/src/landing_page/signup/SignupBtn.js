import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function SignupBtn(){
    const navigate = useNavigate();

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("signup here");
        navigate("/account");
      };

    return(
        <div>
           <form onSubmit={handleSubmit}> 
              <button className='p-2 btn  btn-primary fs-5 mt-5 ' style={{width:"12rem", margin:"0 auto"}} type="submit" > 
                  Sign up for free
              </button>
            </form>
        </div>
    );
}
export default SignupBtn;