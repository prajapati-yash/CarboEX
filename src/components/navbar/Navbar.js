import React, { useState, useEffect } from 'react'
import '../../styles/navbar/Navbar.css'
import { NavLink } from 'react-router-dom';
import ConnectButtonCustom from '../ConnectButtonCustom';
import { Box, Button, Modal, Skeleton, Typography } from "@mui/material";
import { useAccount, useSigner } from "wagmi";
import * as PushAPI from "@pushprotocol/restapi";


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
  const [showPushNotifications, setPushNotifications] = useState([]);
  const [showOpted, setOpted] = useState(false);
  const [open, setOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 0,
    paddingBottom: "32px",
    maxHeight: "70vh",
    overflow: "auto",
    overflowX: "hidden",
    maxWidth: "700px",
  };
  const handleOpen = () => {
    setOpen(true);
    // notifi();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const optIn = async () => {
    await PushAPI.channels.subscribe({
      signer: signer,
      channelAddress: "eip155:80001:0x97861976283e6901b407D1e217B72c4007D9F64D", // channel address in CAIP
      userAddress: `eip155:80001:${address}`, // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging",
    });
  };

  const optOut = async () => {
    await PushAPI.channels.unsubscribe({
      signer: signer,
      channelAddress: "eip155:80001:0x97861976283e6901b407D1e217B72c4007D9F64D", // channel address in CAIP
      userAddress: `eip155:80001:${address}`, // user address in CAIP
      onSuccess: () => {
        console.log("opt out success");
      },
      onError: () => {
        console.error("opt out error");
      },
      env: "staging",
    });
  };
  const getNotifications = async () => {
    const notifications = await PushAPI.user.getFeeds({
      user: `eip155:8000:${address}`, // user address in CAIP
      env: "staging",
      limit: 100,
    });
    setPushNotifications(notifications);
  };
  useEffect(() => {
    if (address) {
      const subscriptions = PushAPI.user.getSubscriptions({
        user: `eip155:80001:${address}`, // user address in CAIP
        env: "staging",
      });
      if (subscriptions.length === 0) {
        setOpted(false);
      }
      for (let i = 0; i < subscriptions.length; i++) {
        if (
          subscriptions[i].channel ===
          "0x97861976283e6901b407D1e217B72c4007D9F64D"
        ) {
          console.log("subscribed");
          setOpted(true);
        }
      }

      getNotifications();
      console.log(subscriptions);
    }
  }, [address]);

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#111111"
              onClick={handleOpen}
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.68-1.5-1.51-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-1.3 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16zm-6.01 6c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zM6.77 4.73c.42-.38.43-1.03.03-1.43-.38-.38-1-.39-1.39-.02C3.7 4.84 2.52 6.96 2.14 9.34c-.09.61.38 1.16 1 1.16.48 0 .9-.35.98-.83.3-1.94 1.26-3.67 2.65-4.94zM18.6 3.28c-.4-.37-1.02-.36-1.4.02-.4.4-.38 1.04.03 1.42 1.38 1.27 2.35 3 2.65 4.94.07.48.49.83.98.83.61 0 1.09-.55.99-1.16-.38-2.37-1.55-4.48-3.25-6.05z" />
            </svg>

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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="push-box">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                position: "sticky",
                top: "0",
                backgroundColor: "#4c2ffd",
                color: "#fefcfc",
                padding: "20px 20px",
                margin: "0px",
                fontWeight: 600,
              }}
            >
              Notifications
              {showOpted === true ? (
                <button onClick={() => optOut()} className="push-btns">
                  Opt Out
                </button>
              ) : showOpted === false ? (
                <button onClick={() => optIn()} className="push-btns">
                  Opt IN
                </button>
              ) : (
                ""
              )}
            </Typography>{" "}
            <Typography id="modal-modal-description" sx={{ mt: 2, p: 2 }}>
              {showPushNotifications.length > 0 &&
                showOpted === true &&
                showPushNotifications.map((item, key) => {
                  return (
                    <div
                      style={{
                        border: "1px solid #10bb35aa",
                        margin: "10px 0px",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                    >
                      <h4 key={key}>{item.title} </h4>
                      <p>{item.message}</p>
                    </div>
                  );
                })}
              {!showOpted ? (
                <div
                  style={{
                    border: "1px solid #4c2ffd",
                    margin: "10px 0px",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <h4>Opt In CarboEx channel to get notification </h4>
                  <p>
                    Channel address - 0xF80a1e20826EED14146d08f88E5557805d439d5fy{" "}
                  </p>
                </div>
              ) : null}
            </Typography>
          </Box>
        </Modal>
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