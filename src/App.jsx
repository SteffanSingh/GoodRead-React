import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import ReviewList from "./Components/Reviewlist";
import AddReviewPage from "./Pages/AddReviewPage";
import BookDetailsPage from "./Pages/BookDetailPage";
import BooksPage from "./Pages/BookPage";
import Homepage from "./Pages/Homepage";
 

import ErrorPage from "./Pages/Errorpage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/Routes/ProtectedPage";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/ContactPage/contact";
 
 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/books" element={<ProtectedRoute Component= {BooksPage } />} /> */}
     
        <Route path="/books" element={< BooksPage  />} />
        {/* <Route path="/books/:id" element={<ProtectedRoute Component= {BookDetailsPage } />} /> */}
        <Route path="/books/:id" element={< BookDetailsPage  />} />
        <Route path="*" element={<ErrorPage />} />

        {/* <Route path="/addreviewpage" element={<ProtectedRoute Component= {AddReviewPage } />} /> */}
        <Route path="/addreviewpage" element={< AddReviewPage   />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/loginpage" element= { <LoginPage/>} />
        <Route path="/login" element= { <Login/>} />
        <Route path="/about" element={<About/> }/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
