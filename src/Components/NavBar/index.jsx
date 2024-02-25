import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

  const [loggedIn, setLoggedIn] = useState(false)



  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
    }
  }, [loggedIn]);



  function handleLogin() {
    localStorage.clear();
    setLoggedIn(false)
  }



  return (
    <>
      <nav style={{ padding: "20px" }} className="navbar navbar-expand-lg navbar-light bg-success  ">
        <Link to="/" className="navbar-brand" href="#">Good Read   </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books" >Book</Link>
            </li>

            <Link to="/about" style={{marginLeft:"20px",marginRight:"10px"}}   href="#" role="button" data-toggle="dropdown" aria-expanded="false" />
              About
             

            <Link to="/contact" style={{marginLeft:"20px",marginRight:"10px"}}   href="#" role="button" data-toggle="dropdown" aria-expanded="false" />
            Contact


          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
          {
            loggedIn ? (<Link onClick={handleLogin} className="btn   btn-warning btn-lg ">Logout </Link>) :

              (<Link to="/login" className="btn  btn-primary btn-lg ">Login </Link>)
          }


        </div>
      </nav>

    </>
  )

}

export default Navbar;
