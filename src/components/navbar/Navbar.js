import React from 'react'
import '../../styles/navbar/Navbar.css'
import { NavLink } from 'react-router-dom';


const navigation = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Resources",
    link: "/resources",
  },
  // {
  //   title: "Market",
  //   link: "/market",
  // },
  {
    title: "Calculator",
    link: "/calculator",
  },
  {
    title: "Contact",
    link: "/contact",
  },

];

function Navbar() {

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        role="navigation"
      >
        <div id="container" className="container-fluid px-4 px-md-5  ">


          <NavLink className="navbar-brand" to="/">
            <img
              src="../assets/logo/carboEx_Logo.png"
              height="100px"
              width="150px"

              className="img-fluid d-inline-block align-top justify-content-between"
              alt="" style={{ borderRadius: "50%" }}
            />
          </NavLink>

          {/* <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > */}

          <button
            type="button"
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" data-bs-toggle="collapse" data-bs-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          {/* <span className="navbar-toggler-icon"></span>
          </button> */}

          <div
            className="collapse navbar-collapse justify-content-end nav-height"
            id="navbarRightAlignExample"
          >

            <ul className="navbar-nav  ml-auto align-items-center mb-2 mb-lg-0">
              {navigation.map((item, index) => (
                <NavLink1 body={item} key={index} />
              ))}

            </ul>

            <div className='ps-lg-5 d-flex ms-5 ms-lg-0 align-items-center justify-content-center'>
              <button className='btn btn-dark shadow-none login-text justify-content-center px-5 py-2 rounded-pill'>Log In</button>
            </div>

          </div>

        </div>
      </nav>
    </>
  );
}

function NavLink1({ body }) {
  return (
    <>
      <li className="nav-item">
        <NavLink
          className="nav-link p-0 active"
          aria-current="page"
          to={body.link}
        >
          {body.title}
        </NavLink>
      </li>
    </>
  )
}

export default Navbar