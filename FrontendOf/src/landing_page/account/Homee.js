
//const Homee = () => {
 // return (
    //<div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
    //    <Link to='/login' className="btn btn-light my-5">Logout</Link>
    //</div>
 // );
//}

import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid}  from "uuid";

const Homee = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:3001/register', {name, email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                alert("Registered successfully! Please Login to proceed.");
                navigate('/login');
            }
            
        })
        .catch(err => console.log(err));
        navigate('/login');
    }
    

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%', height:"50%"}}>
                    <h2 className='mb-3 text-primary'> Profile </h2>
                    <h3> Welcome! to your account </h3>
                    <p> Your User Id is: </p>
                    <br/>
                    <form onSubmit={handleSubmit}>      
                        <div>
                            <div style={{justifyContent:"start", display:"flex"}}>
                                <p className='fs-4 ' style={{marginLeft:"8%"}}>
                                   <i class="fa-regular fa-user"> </i>&nbsp;
                                   User Id: &nbsp;&nbsp; {small_id}
                                </p>
                            </div>
                            <Link to='/' className="btn btn-secondary mt-4" > Go HomePage </Link> &nbsp;&nbsp;&nbsp; &nbsp;
                            <Link to='/login' className="btn btn-secondary mt-4" > Log out </Link>   
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}


export default Homee;