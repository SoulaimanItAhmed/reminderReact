import React, { useState } from "react";
import './Affichage.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../reducers/userSlice";

export default function Affichage(){
    const {items} = useSelector(state => state.user)
    const dispatch = useDispatch();

    const handleDelete=(event, id)=>{
        event.preventDefault();
        dispatch(deleteUser(id));
    }
    
    return(
        <form>
            <>
                {items.length>0 ?items.map(item=>
                    <div className="divP"> 
                        <span>{item.id}</span>
                        <h1>Hellow {item.name}</h1>
                        <h1>Your Email is :{item.email}</h1> 
                        <button onClick={(event)=>handleDelete(event, item.id)}>Delete</button>       
                    </div>      
                    )
                    :
                    <center><br></br>There is No Items</center>
                }
            </>
        </form>
    )
}