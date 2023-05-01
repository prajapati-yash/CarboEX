import React, { useState, useEffect } from "react";
import "../../styles/DemoNavbar.css"
import { NavLink, useLocation } from "react-router-dom";
import ConnectButtonCustom from "../ConnectButtonCustom";
import { useAccount } from 'wagmi';
import { ethers } from "ethers";
import { companyInstance } from "../Contracts";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState("/");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [approachDropDown, setApproachDropDown] = useState(false);
  const [memberDropDown, setMemberDropDown] = useState(false);
  const [knowMoreDropDown, setKnowMoreDropDown] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath)



  const verifyUserAccount = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await companyInstance();
        const verifyUser = await con.iscompaniesAdd(address)
        // console.log(verifyUser)
        return verifyUser;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const verifyNavbar = async () => {
    try {
      if (address) {
        const tx = await verifyUserAccount();
        if (tx) {
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    verifyNavbar()
  }, [isAuthenticated])



  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setDropdownVisible(false);
    setApproachDropDown(false);
    setMemberDropDown(false);
    setKnowMoreDropDown(false);

  };

  const getOurApproachActiveClass = () => {
    // return  currentPath.startsWith("certificate-validate" || "calculator") ? "active" : '' ;
    // return  currentPath.includes("/certificate") ? "active" : "/calculator"? "active":'' ;
    return activeTab.startsWith("our-approach") ? "active" : '';
    // console.log(hello)
  };
  const getMemberActiveClass = () => {
    return activeTab.startsWith("member") ? "active" : '';
    // return  currentPath.includes("/member") ? "active" : '' ;
  };
  const getKnowMoreActiveClass = () => {
    return activeTab.startsWith("know") ? "active" : '';
  };

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };


  const showApproachDropDown = () => {
    setApproachDropDown(true)
  }
  const hideApproachDropDown = () => {
    setApproachDropDown(false)
  }
  const showMemberDropDown = () => {
    setMemberDropDown(true)
  }
  const hideMemberDropDown = () => {
    setMemberDropDown(false)
  }
  const showKnowMoreDropDown = () => {
    setKnowMoreDropDown(true)
  }
  const hideKnowMoreDropDown = () => {
    setKnowMoreDropDown(false)
  }

  return (
    <nav className={`Navbar  `}>
      <div id="container" className="container-fluid mainNavContainer px-4 px-md-5  d-flex justify-content-between align-items-center">
        <div className="Navbar__header ">
          {/* <div className="Navbar__logo">MyLogo</div> */}
          <div>
            <NavLink className="navbar-brand" to="/">
              <img
                src="../assets/logo/carboEx_Logo.png"
                height="100px"
                width="150px"
                className="img-fluid d-inline-block align-top justify-content-between brand__logo"
                alt=""
                style={{}}
              />
            </NavLink>
          </div>
          <div className={`Navbar__menu-icon `} onClick={handleMenuClick}>
            <i className={`fas ${menuVisible ? "fa-bars" : "fa-times"}`}></i>
          </div>
        </div>

        <ul className={`Navbar__list d-flex justify-content-center align-items-center ${menuVisible ? "notvisible" : ""}`} >
          {isAuthenticated ? (
            <>
              <li
                className={`Navbar__item ${activeTab === "explore" ? "active" : ""}`}
                onClick={() => handleTabClick("explore")}
              >
                <NavLink to="/buy-carbon-credits" className="linkStyle">Explore</NavLink>
              </li>


              {/* -------- Our Approach --------------  */}
              <li className={`Navbar__item ${getOurApproachActiveClass()} approachClass `}
                onMouseEnter={showApproachDropDown}
                onMouseLeave={hideApproachDropDown}

              >
                Our Approach <i class="fa-solid fa-angle-down"></i>
                {approachDropDown && (
                  <div className="navDropDown approachDropDown p-3 text-center" onMouseEnter={showApproachDropDown} onMouseLeave={hideApproachDropDown}
                  >
                    <div className={`Navbar__dropdown-item pb-2 ${activeTab === 'our-approach-validate-certificate' ? 'active' : ''}`} onClick={() => handleTabClick('our-approach-validate-certificate')}>
                      <NavLink to="/certificate-validation-proposal" className="linkStyle">Validate Certificate</NavLink>
                    </div>
                    <div className={`Navbar__dropdown-item ${activeTab === 'our-approach-see-our-calculator' ? 'active' : ''}`} onClick={() => handleTabClick('our-approach-see-our-calculator')}>
                      <NavLink to="/calculator" className="linkStyle"> See Our Calculator  </NavLink>
                    </div>
                  </div>)}  </li>

              {/* ---------------------------
  Member 
  ------------------------------- */}
              <li className={`Navbar__item ${getMemberActiveClass()} memberClass `} onMouseEnter={showMemberDropDown} onMouseLeave={hideMemberDropDown}>
                Member <i class="fa-solid fa-angle-down"></i>


                {memberDropDown && (
                  <div className="navDropDown memberDropDown p-3 " onMouseEnter={showMemberDropDown} onMouseLeave={hideMemberDropDown}>
                    <div className={`Navbar__dropdown-item pb-2 ${activeTab === 'member-validate-certificate' ? 'active' : ''}`} onClick={() => handleTabClick('member-become-dao-member')}>
                      <NavLink to="/become-member" className="linkStyle">Become a DAO Member</NavLink>
                    </div>
                    <div className={`Navbar__dropdown-item ${activeTab === 'member-see-our-calculator' ? 'active' : ''}`} onClick={() => handleTabClick('member-proposals')}>
                      <NavLink to="/dao-member-proposals" className="linkStyle"> All Proposals </NavLink>
                    </div>
                  </div>)}  </li>
              {/* ---------------------------
  Know More 
  ------------------------------- */}
              <li className={`Navbar__item ${getKnowMoreActiveClass()} knowMoreClass `} onMouseEnter={showKnowMoreDropDown} onMouseLeave={hideKnowMoreDropDown}>
                Know More <i class="fa-solid fa-angle-down"></i>


                {knowMoreDropDown && (
                  <div className="navDropDown knowMoreDropDown p-3 " onMouseEnter={showKnowMoreDropDown} onMouseLeave={hideKnowMoreDropDown}>
                    <div className={`Navbar__dropdown-item ${activeTab === 'know-about' ? 'active' : ''} pb-2`} onClick={() => handleTabClick('know-about-us')}>
                      <NavLink to="/about" className="linkStyle">About Us</NavLink>
                    </div>
                    <div className={`Navbar__dropdown-item ${activeTab === 'know-resources' ? 'active' : ''}`} onClick={() => handleTabClick('know-resources')}>
                      <NavLink to="/resources" className="linkStyle"> Resources </NavLink>
                    </div>
                  </div>)}  </li>

              {/* {--------------
Contact
-----------------} */}
              <li
                className={`Navbar__item ${activeTab === "contact" ? "active" : ""}`}
                onClick={() => handleTabClick("contact")}
              >
                <NavLink to="/contact" className="linkStyle"> Contact </NavLink>
              </li>
              {/* {--------------
Dashboard
-----------------} */}
              <li
                className={`Navbar__item ${activeTab === "dashboard" ? "active" : ""
                  }`}
                onClick={() => handleTabClick("dashboard")}
              >
                <NavLink to="/user-dashboard" className="linkStyle"> Dashboard</NavLink>
              </li>

              <div className="ps-lg-3 ps-4 d-flex align-items-center justify-content-center">
                <ConnectButtonCustom />
              </div>
            </>
          ) : (<>


            {/* When user is not logged In! */}

            {/* ---------------------------
  Know More 
  ------------------------------- */}
            <li className={`Navbar__item ${getKnowMoreActiveClass()} knowMoreClass `} onMouseEnter={showKnowMoreDropDown} onMouseLeave={hideKnowMoreDropDown}>
              Know More <i class="fa-solid fa-angle-down"></i>


              {knowMoreDropDown && (
                <div className="navDropDown knowMoreDropDown p-3 " onMouseEnter={showKnowMoreDropDown} onMouseLeave={hideKnowMoreDropDown}>
                  <div className={`Navbar__dropdown-item ${activeTab === 'know-about' ? 'active' : ''} pb-2`} onClick={() => handleTabClick('know-about-us')}>
                    <NavLink to="/about" className="linkStyle">About Us</NavLink>
                  </div>
                  <div className={`Navbar__dropdown-item ${activeTab === 'know-resources' ? 'active' : ''}`} onClick={() => handleTabClick('know-resources')}>
                    <NavLink to="/resources" className="linkStyle"> Resources </NavLink>
                  </div>
                </div>)}  </li>

            {/* {--------------
Contact
-----------------} */}
            <li
              className={`Navbar__item ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => handleTabClick("contact")}
            >
              <NavLink to="/contact" className="linkStyle"> Contact </NavLink>
            </li>

            <div className="ps-lg-3 ps-4 d-flex align-items-center justify-content-center">
              <ConnectButtonCustom />
            </div>
          </>

          )}
        </ul>
        {/* } */}
      </div>
    </nav>
  );
}

export default Navbar;
