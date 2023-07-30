import React from 'react'

const Navbar = () => {

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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                schedule
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                favourites
              </a>
            </li>


          </ul>
        </div>
          {/* <div className='bg-success className="ml-auto"'> */}
          <div className="d-flex align-items-center">


            <ul className="navbar-nav d-flex float-right ">
              <li className="nav-item" >
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Signup
                </a>
              </li>
            </ul>
          </div>

      </div>
    </nav>

  )
}


export default Navbar