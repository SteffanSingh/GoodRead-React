import ReviewData from "../../data/reviews"
import Reviews from "./Review"


import { Link } from "react-router-dom"

const ReviewList = () => {

    return (
        <>

            <div className="conatainer wrapper"  >
                <h2 >Rating and Reviews</h2>

                <Link to="/addreviewpage">  <button className="container" style={{marginTop:"20px", backgroundColor: "orange", borderRadius: "5px", border: "None" }}>
                    Write a Review</button></Link>
                <hr />
                <h5>Displaying {ReviewData.length} reviews </h5>
                <hr />

                {

                    ReviewData.map((review, index) =>

                        <Reviews key={index} data={review} />
                    )

                }</div>
        </>
    )

}

export default ReviewList