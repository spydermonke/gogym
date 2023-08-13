import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes, useNavigate
} from "react-router-dom"


const Navbar = () => {
  const navigate =useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    localStorage.removeItem("loggedinemail");
    navigate("/Login")
    
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          GO GYM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {
              (localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Schedule">
                    Schedule
                  </Link>
                </li>
                : ""}


          </ul>
        </div>
        {
          (localStorage.getItem("authToken")) ?
            <div className="btn bg-success" onClick={handleLogout}>
              Logout
            </div>
            : <div className="d-flex align-items-center">


              <ul className="navbar-nav d-flex float-right ">
                <li className="nav-item" >
                  <a className="nav-link" href="/Login">
                    Login
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/Signup">
                    Signup
                  </a>
                </li>
              </ul>
            </div>
        }


      </div>
    </nav>

  )
}


export default Navbar