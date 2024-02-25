import { useEffect } from "react"
import BookData from "../../data/Book"
import Book from "./Book"
import { useDispatch, useSelector } from "react-redux"
import { setBooks } from "../../redux/actions/book-action"


const BookList = ()=>{

    
const dispatch = useDispatch()
const books = useSelector((state)=>state.books)



    useEffect(()=>{

        dispatch(setBooks(BookData))
    })

    return(
        <>
            <div className="container">
                <h1 className="text-center">  All Books  </h1>
                    <div className="row">

                    {
                        BookData.map((book,index)=>
                         < Book key={index} data={book}/> )
                            

                    }

                    </div>
            </div>
        
        </>
    )
}


export default BookList