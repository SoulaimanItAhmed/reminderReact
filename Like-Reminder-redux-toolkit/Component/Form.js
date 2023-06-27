import React, { useState } from "react";
import './Form.css';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducers/userSlice";


export default function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser({id:Math.random(),name, email}));
        setName("");
        setEmail("");
    }
    const handleSubmitVide=(e)=>{
            e.preventDefault();
            setName("");
            setEmail("");
    }
    return(
        <form onSubmit={name.length && email.length > 0 ?handleSubmit : handleSubmitVide}>
            <div className="form">      
                <input type="text" placeholder="insert name"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                />
                <input type="text" placeholder="insert email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                />
                <button>Submit</button>
            </div>
        </form>
    )
}