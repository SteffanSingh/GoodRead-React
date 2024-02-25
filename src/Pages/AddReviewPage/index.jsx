import React, { useEffect, useState } from "react"
import BookData from "../../data/Book"
 
import BookDetails from "../../Components/BookDetails"
import Navbar from "../../Components/NavBar"
import Footer from "../../Components/Footer"
import AddReview from "../../Components/AddReview"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addBook } from "../../redux/actions/book-action"



const  AddReviewPage = ()=> {

    //const [book, setBook] = useState({})
    const { id } = useParams()
    const dispatch = useDispatch()

const book = useSelector((state)=>state.book)


useEffect(()=>{
    dispatch(addBook(BookData[id]))
    
}, [id])
    return(

            <>
             <Navbar/>
            <AddReview data= {book}/>
            
            <Footer/>
            </>
    )
}

export default AddReviewPage
