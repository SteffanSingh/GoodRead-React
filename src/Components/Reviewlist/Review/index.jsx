 
  

const Reviews = (props) =>{

    const {_id, author,text} = props.data

    return(
        <>
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                <div className="card">
                    
                    <div className="card-body" >
                                <h3>{author} </h3>
                                <p>{text} </p>
                                

                    </div>
                </div>

            </div>

                </div>
            </div>



        </>

    )


}
export default Reviews