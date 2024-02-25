import { Dropdown } from "bootstrap"
import React, { useEffect, useState } from "react"




const AddReview = (props) => {

    const { title, author, image, description } = props.data


    return (


        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="wrapper text-center">
                        <img src={image} alt="" className="img-fluid" />
                    </div>

                </div>


                <div className="col-md-8">
                    <div className="wrapper">
                        <h1 style={{ color: "red", fontSize: "50px" }} >
                            {title}
                        </h1>
                        <h2 style={{ color: "#999" }}>{author} </h2>

                        <p>{description} </p>
                        

                        <div  > 
                        <h2>Write a Review</h2><hr />
                        <div  >
                        <textarea placeholder="What did you think?" name="" id="" cols="100" rows="10"></textarea>
                           
                           
                            <mark> <label style={{color:"red", fontSize:"20px"}} for="cars">Rating</label></mark> 
                       
                        <select autoFocus required name="cars" id="cars">

                            <option value="volvo">5 </option>
                            <option value="saab">4</option>
                            <option value="mercedes">3</option>
                            <option value="audi">2</option>
                            <option value="audi">1</option>


                        </select>
                        
                        <br />
                        <button className="btn btn-primary btn-block">Submit</button>
                        
                        </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}




export default AddReview