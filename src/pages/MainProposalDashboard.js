import React, { useEffect, useState } from 'react'
import '../styles/DAOMember/MainProposalDashboard.css'
import ProposalDashboard from './ProposalDashboard';
import ProposalOrders from './ProposalOrders';
import { Link, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { companyInstance, daoInstance } from '../components/Contracts';
import { useAccount } from 'wagmi';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function MainProposalDashboard() {
    const [logoImg, setLogoImg] = useState();
    const [companyName, setCompanyName] = useState();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [isEditing, setIsEditing] = useState(false);
    const { address } = useAccount();
    const [credits, setCredits] = useState();
    const [checkMember, setCheckMember] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);
    // const [isDAO, setIsDAO] = useState(false);

    const MainPropPageData = {
        logo: logoImg,
        name: companyName,
        userName: userName,
        email: email,
        availableCredits: credits ? credits : 0,
    };

    const [activeComponent, setActiveComponent] = useState('proposalDashboard');
    const navigate = useNavigate();
    const handleProposalClick = (e) => {
        e.preventDefault();
        navigate('/user-dashboard');
        setActiveComponent('proposalDashboard');
    };

    const handleOrdersClick = (e) => {
        e.preventDefault();
        navigate('/user-dashboard/orders-dashboard');
        setActiveComponent('proposalOrders');
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'proposalDashboard':
                return <ProposalDashboard />;
            case 'proposalOrders':
                return <ProposalOrders />;
            default:
                return <ProposalDashboard />;
        }
    };

    const withdrawStake = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                if (!provider) {
                    console.log("Metamask is not installed, please install!");
                }
                const conDAO = await daoInstance();
                const returnedStake = await conDAO.withdrawStake();
                returnedStake.wait();
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
            const ErrorReason = error.reason;
            // console.log(ErrorReason)
            toast.error(`${ErrorReason}`, {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const getUserAccountDetails = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                if (!provider) {
                    console.log("Metamask is not installed, please install!");
                }
                const con = await companyInstance();
                const userData = await con.getUser(address);

                // console.log(userData)
                // console.log(userData[5])
                // console.log(userData[5])
                setLogoImg(userData[5])
                setCompanyName(userData[3])
                setUserName(userData[1])
                setEmail(userData[2])
                return userData;
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserAccountDetails();
    }, [])

    const handleNavigation = async (value) => {
        if (value > 0) {
            navigate("/sell-carbon-credits")
        } else {
            toast.error('Insufficient Carbon Credits', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    const getUserCreditDetails = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                if (!provider) {
                    console.log("Metamask is not installed, please install!");
                }
                const con = await companyInstance();
                const totalCredits = await con.totalCreditMapping(address);
                const creditsInDecimal = parseInt(totalCredits._hex, 16)
                setCredits(creditsInDecimal);
                // console.log(totalCredits)
                return credits
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserCreditDetails()
    }, [])

    // const receivedData = getUserAccountDetails();

    const checkDAOMember = async () => {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            if (!provider) {
                console.log("Metamask is not installed, please install!");
            }
            const conDAO = await daoInstance();
            const isDAOMember = await conDAO.isMemberMapping(address)
            // console.log(isDAOMember)
            return isDAOMember;
        }
    }

    useEffect(() => {
        async function fetchData() {
            const isDAOMember = await checkDAOMember();
            setCheckMember(isDAOMember);
            setIsPageLoading(false);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="container-fluid main-prop-dash-Main">
                <div className="row justify-content-center">
                    <div className='u-dashboard-title d-flex justify-content-center'>
                        <p className='u-dashboard-title-name'>MY DASHBOARD</p>
                    </div> <hr />
                    <div className="col-lg-2 col-md-3 col-sm-4 DAO-Member-logo-class ">
                        <div>
                            <div className='IMG-CHECK-class'>
                                <img src={"https://ipfs.io/ipfs/" + logoImg} alt="Logo" className="DAO-Member-logo img-fluid" />
                            </div>
                            <br />
                            <div className='DAO-Check-Mark d-flex justify-content-center'>
                                {isPageLoading ? (
                                    <div>Loading...</div>
                                ) : (
                                    checkMember ? (
                                        <div className='fa-check-main-class d-flex justify-content-center align-items-center'>
                                            <div className='fa-check-sub-class mx-auto me-2'><i className="fa-solid fa-check mx-1" style={{ color: "#ffffff", }}></i></div>
                                            <div><b>DAO MEMBER</b></div>
                                        </div>


                                    ) : (
                                        <Link className='xmark-check-link-class' to={"/member/become-member"}><div className='fa-xmark-main-class d-flex justify-content-center align-items-center'>
                                            <div className='fa-xmark-sub-class mx-auto me-2'><i className="fa-solid fa-xmark mx-1" style={{ color: "#ffffff", }}></i></div>
                                            <div><b>DAO MEMBER</b></div>
                                        </div></Link>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-4 DaoMemberDetails-class">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label className="PropHeadLabel">Company Name:</label>
                                <input type="text"
                                    className="form-control prop-dash-data-bg"
                                    value={isPageLoading ? (
                                        'Loading...'
                                    ) : (companyName)}
                                    readOnly />
                            </div>
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label className="PropHeadLabel">Username:</label>
                                <input type="text"
                                    className="form-control prop-dash-data-bg"
                                    value={isPageLoading ? (
                                        'Loading...'
                                    ) : (userName)}
                                    readOnly />
                            </div>
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label className="PropHeadLabel">Email:</label>
                                <input type="email"
                                    className="form-control prop-dash-data-bg"
                                    value={isPageLoading ? (
                                        'Loading...'
                                    ) : (email)}
                                    readOnly />
                            </div>
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label className="PropHeadLabel">Credits Available:</label>
                                <input type="text"
                                    className="form-control prop-dash-data-bg"
                                    value={isPageLoading ? (
                                        'Loading...'
                                    ) : (MainPropPageData.availableCredits)}
                                    readOnly />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex justify-content-end">
                        <div className='DMember-db-btns d-flex justify-content-center align-items-center col-8 mx-auto'>
                            <div className='DMember-db-btns-body d-flex justify-content-center align-items-center'>
                                <div className='DMember-db-btns-ES'>
                                    <div className='DAOSELL-btn'>
                                        <button
                                            className='DMember-token-btn'
                                            onClick={() => navigate("/approach/certificate-validation-proposal")}>
                                            CREATE PROPOSAL
                                        </button>
                                    </div>
                                    <div className='DAOSELL-btn'>
                                        <button className='PData-sell-btn' onClick={() => {
                                            handleNavigation(MainPropPageData.availableCredits)
                                        }}>SELL CREDITS</button>
                                    </div>
                                    <div className='DAOSELL-btn mt-3'>
                                        <button
                                            className="withdraw-stake-btn"
                                            // className="PData-sell-btn btn-primary rounded-pill p-2 px-2"
                                            onClick={() => {
                                                withdrawStake()
                                            }}>WITHDRAW STAKE</button>
                                        {/* <button className='PData-sell-btn' onClick={() => {
                                            handleNavigation(MainPropPageData.availableCredits)
                                        }}>SELL CREDITS</button> */}
                                    </div>

                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='Member-prop-orders-class'>
                    <div className="Member-prop-orders-Btns row">
                        <button type="button" className="Member-prop-Btn col-12 col-md-5" onClick={handleProposalClick}>My proposals </button>
                        <button type="button" className="Member-orders-Btn col-12 col-md-5" onClick={handleOrdersClick}>My orders</button>

                    </div>
                </div>
                <>
                    {renderComponent()}
                </>
            </div >
            {/* <button onClick={checkDAOMember}>Click to get data</button> */}
            {/* {console.log(receivedData)} */}
        </>
    )
}

export default MainProposalDashboard
