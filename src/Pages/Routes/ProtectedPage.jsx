import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRoute=(props)=>{
    const {Component} = props
let  navigate = useNavigate()

    useEffect(()=>{
        let token = localStorage.getItem("token")

        if (!token){
            navigate("/login")
        }
    });

return(
    <>
    <Component/>
    </>
)

}

export default ProtectedRoute