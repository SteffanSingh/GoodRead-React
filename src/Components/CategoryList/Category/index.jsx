
import { Link } from "react-router-dom"

const Category = (props) => {

    const { catname, catid, catImage } = props.data

    return (

        <div className="col-sm-3">
            <div className="card">
                <img src={catImage} alt=" " classNameName="card-image-top" />
                <div className="card-body">

                <Link to={"/books"}   className="card-title"> {catname} </Link>


                </div>
            </div>


        </div>
    )

}
export default Category