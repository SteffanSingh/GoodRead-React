import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Book = (props) => {
    const { id,title, author, image, description, rating } = props.data
 

    return (
        <div class="col-sm-3">
                <div class="card">
                 <img src={image} alt="" />  
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>

                        <Link to={"/books/"+id} class="btn btn-primary">Show Details </Link>
                        

                    </div>

                </div>
                

        </div>



    )
}

export default Book