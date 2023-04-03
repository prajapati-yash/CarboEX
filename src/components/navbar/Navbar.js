import React from 'react'
// import React, { useState, useEffect } from 'react'
import '../../styles/navbar/Navbar.css'
import { NavLink } from 'react-router-dom';
import ConnectButtonCustom from '../ConnectButtonCustom';
// import { Box, Button, Modal, Skeleton, Typography } from "@mui/material";
// import { useAccount, useSigner } from "wagmi";
// import * as PushAPI from "@pushprotocol/restapi";


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
  // const [showPushNotifications, setPushNotifications] = useState([]);
  // const [showOpted, setOpted] = useState(false);
  // const [open, setOpen] = useState(false);
  // const { address, isConnected } = useAccount();
  // const { data: signer } = useSigner();
  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: "50vw",
  //   bgcolor: "background.paper",
  //   borderRadius: "20px",
  //   boxShadow: 24,
  //   p: 0,
  //   paddingBottom: "32px",
  //   maxHeight: "70vh",
  //   overflow: "auto",
  //   overflowX: "hidden",
  //   maxWidth: "700px",
  // };
  // const handleOpen = () => {
  //   setOpen(true);
  //   // notifi();
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const optIn = async () => {
  //   await PushAPI.channels.subscribe({
  //     signer: signer,
  //     channelAddress: "eip155:80001:0x97861976283e6901b407D1e217B72c4007D9F64D", // channel address in CAIP
  //     userAddress: `eip155:80001:${address}`, // user address in CAIP
  //     onSuccess: () => {
  //       console.log("opt in success");
  //     },
  //     onError: () => {
  //       console.error("opt in error");
  //     },
  //     env: "staging",
  //   });
  // };

  // const optOut = async () => {
  //   await PushAPI.channels.unsubscribe({
  //     signer: signer,
  //     channelAddress: "eip155:80001:0x97861976283e6901b407D1e217B72c4007D9F64D", // channel address in CAIP
  //     userAddress: `eip155:80001:${address}`, // user address in CAIP
  //     onSuccess: () => {
  //       console.log("opt out success");
  //     },
  //     onError: () => {
  //       console.error("opt out error");
  //     },
  //     env: "staging",
  //   });
  // };
  // const getNotifications = async () => {
  //   const notifications = await PushAPI.user.getFeeds({
  //     user: `eip155:8000:${address}`, // user address in CAIP
  //     env: "staging",
  //     limit: 100,
  //   });
  //   setPushNotifications(notifications);
  // };
  // useEffect(() => {
  //   if (address) {
  //     const subscriptions = PushAPI.user.getSubscriptions({
  //       user: `eip155:80001:${address}`, // user address in CAIP
  //       env: "staging",
  //     });
  //     if (subscriptions.length === 0) {
  //       setOpted(false);
  //     }
  //     for (let i = 0; i < subscriptions.length; i++) {
  //       if (
  //         subscriptions[i].channel ===
  //         "0x97861976283e6901b407D1e217B72c4007D9F64D"
  //       ) {
  //         console.log("subscribed");
  //         setOpted(true);
  //       }
  //     }

  //     getNotifications();
  //     console.log(subscriptions);
  //   }
  // }, [address]);

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

            <div className='ps-lg-5 d-flex align-items-center justify-content-center'>
              {/* <button className='btn btn-dark shadow-none login-text justify-content-center px-5 py-2 rounded-pill'>Connect Wallet</button> */}
              <ConnectButtonCustom />
            </div>


          </div>

        </div>


      </nav >

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