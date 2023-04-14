import React, { useState } from "react";
// import React, { useState, useEffect } from 'react'
import "../../styles/navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import ConnectButtonCustom from "../ConnectButtonCustom";

const navigation = [
 
  // {
  //   title: "Resources",
  //   link: "/Resources",
  // },

  {
    title: "Explore",
    link: "/buy-carbon-credits",
  },
  {
    title: "Member",
    link: "",
    auth: true,
    submenu: [
      { title: "Become a Member", link: "/" },
      { title: "Proposals", link: "/" },
    ],
  },
  {
    title: "Our Approach",
    link: "",
    auth: true,
    submenu: [
      { title: "Validate Carbon Credits", link: "/approach/validate" },
      { title: "Calculate Carbon Footprints", link: "/calculator" },
    ],
  },
  // {
  //   title: "Market",
  //   link: "/market",
  // },
  {
    title: "Know More",
    link: "",
    submenu:[
      {
        title:"About Us",
        link:"/about"},
      {
        title:"Resources",
        link:"/resources"
      }
    ]
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const hasSubmenu = (item) => {
    return item.submenu && item.submenu.length > 0;
  };

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
              alt=""
              style={{ borderRadius: "50%" }}
            />
          </NavLink>

          <buttons
            type="button"
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            data-bs-toggle="collapse"
            data-bs-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </buttons>
          <div
            className="collapse navbar-collapse justify-content-end nav-height"
            id="navbarRightAlignExample"
          >
            <ul className="navbar-nav  ml-auto align-items-center mb-2 mb-lg-0">
              {navigation.map((item, index) => {
                // <NavLink1 body={item} key={index} />

                if (item.auth && !isAuthenticated) {
                  return null;
                }
                return (
                  <li className="nav-item" key={index}>
                    {hasSubmenu(item) ? (
                      <div className="dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle p-0 active"
                          aria-current="page"
                          to={item.link}
                          id={`nav-link-${index}`}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          // onClick={() => {
                          //   console.log(window.innerWidth)
                          //   if (window.innerWidth < 1000) {
                          //     const navbarToggler =
                          //       document.querySelector(".navbar-toggler");
                          //     if (navbarToggler) {
                          //       navbarToggler.click();
                          //     }
                          //   }
                          // }}
                        >
                          {item.title}
                        </NavLink>

                        <ul
                          className="dropdown-menu"
                          aria-labelledby={`dropdown-${index}`}
                        >
                          {item.submenu.map((subitem, subindex) => (
                            <li key={subindex}>
                              <NavLink
                                className="sub-item dropdown-item p-0 active"
                                aria-current="page"
                                // key={subindex}
                                to={subitem.link}
                              >
                                {subitem.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <NavLink to={item.link} className="nav-link">
                        {item.title}
                      </NavLink>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="ps-lg-3 ps-4 d-flex align-items-center justify-content-center">
              <ConnectButtonCustom />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// function NavLink1({ body },{index}) {
//   return (
//     <>
{
  /* <li className="nav-item">
        <NavLink
          className="nav-link p-0 active"
          aria-current="page"
          to={body.link}
          onClick={() => {
            // console.log(window.innerWidth)
            if (window.innerWidth < 1000) {
              const navbarToggler = document.querySelector('.navbar-toggler');
              if (navbarToggler) {
                navbarToggler.click();
              }
            }
          }}
        >
          {body.title}
        </NavLink>
      </li> */
}
{
  /* 
      <li className="nav-item">
      {hasSubmenu(item)?(
        <div className="dropdown">
          <NavLink
          className="nav-link dropdown-toggle p-0 active"
          aria-current="page"
          to={body.link}
          id={`nav-link-${index}`}
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {body.title}
        </NavLink>

        <ul 
        className="dropdown-menu"
         aria-labelledby={`dropdown-${index}`}>
            {body.submenu.map((subitem, subindex) => (
              <li key={subindex} className="nav-item dropdown-item">
                <NavLink
                  className="sub-item dropdown-item p-0 active"
                  aria-current="page"
                  key={subindex}
                  to={subitem.link}
                >
                  {subitem.title}
                </NavLink>
             </li>
            ))}

        </ul>

        </div>
      ): (
        <a href={body.link} className="nav-link">
          {body.title}
        </a>
      )}
    </li>
        
    </>
  );
} */
}

export default Navbar;
