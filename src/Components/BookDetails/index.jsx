import React, { useEffect, useState } from "react"
import ReviewList from "../Reviewlist"
import { Link } from "react-router-dom"


const BookDetails = (props)=>{

    const {title, author, image, description} = props.data 

    return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="wrapper text-center">
                        <img src={image} alt="" className="img-fluid" />
                        </div>

                    </div>

                    <div className="col-md-8" >
                        <div className="wrapper" >
                            <h1 style= {{color:"red",fontSize:"50px" }} >
                                {title}
                            </h1>
                            <h2 style= {{color:"#999"}}>{author} </h2>
                            <p >{description} </p>
                            <hr/>
                            
               
                    
                        </div><ReviewList />
                    </div>
                </div>
                
            </div>
    )
}


export default BookDetails