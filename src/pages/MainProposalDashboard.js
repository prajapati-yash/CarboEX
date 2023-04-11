import React, { useState } from 'react'
import '../styles/DAOMember/MainProposalDashboard.css'
import ProposalDashboard from './ProposalDashboard';
import ProposalOrders from './ProposalOrders';
import { useNavigate } from 'react-router-dom';

function MainProposalDashboard() {
    const [companyName, setCompanyName] = useState("Your Company Name");
    const [walletAddress, setWalletAddress] = useState("Your Wallet Address");
    const [email, setEmail] = useState("Your Email Address");
    const [isEditing, setIsEditing] = useState(false);

    const MainPropPageData = {
        logo: "../assets/logo/carboEx_Logo.png",
        name: companyName,
        wallAddress: walletAddress,
        email: email,
        availableCredits: "25",
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


    return (
        <>
            <div className="container-fluid main-prop-dash-Main">
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-3 col-sm-4 DAO-Member-logo-class">
                        <img src={MainPropPageData.logo} alt="Logo" className="DAO-Member-logo img-fluid" />
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-4 DaoMemberDetails-class">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label className="PropHeadLabel">Company Name:</label>
                                <input type="text" className="form-control prop-dash-data-bg" value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    readOnly={!isEditing} />
                            </div>
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label className="PropHeadLabel">Wallet Address:</label>
                                <input type="text" className="form-control prop-dash-data-bg" value={walletAddress}
                                    onChange={(e) => setWalletAddress(e.target.value)}
                                    readOnly={!isEditing} />
                            </div>
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label className="PropHeadLabel">Email:</label>
                                <input type="email" className="form-control prop-dash-data-bg" value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    readOnly={!isEditing} />
                            </div>
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label className="PropHeadLabel">Credits Available:</label>
                                <input type="text" className="form-control prop-dash-data-bg" value={MainPropPageData.availableCredits} readOnly />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex justify-content-end">
                        <div className='DMember-db-btns d-flex justify-content-center align-items-center col-8 mx-auto'>
                            <div className='DMember-db-btns-body '>
                                <div className='DMember-db-btns-ES d-flex justify-content-center align-items-center'>
                                    <button
                                        className='DMember-edit-save-btn rounded-pill'
                                        onClick={() => setIsEditing(!isEditing)}
                                    >
                                        {isEditing ? 'SAVE' : 'EDIT'}
                                    </button>
                                </div>
                                <div className='DMember-db-btns-ES'>
                                    <button className='PData-sell-btn  rounded-pill'>SELL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='Member-prop-orders-class'>
                    <div className="Member-prop-orders-Btns row">
                        <button type="button" className="Member-prop-Btn col-12 col-md-5" onClick={handleProposalClick}>My proposals</button>
                        <button type="button" className="Member-orders-Btn col-12 col-md-5" onClick={handleOrdersClick}>My orders</button>
                    </div>
                </div>
                <>
                    {renderComponent()}
                </>
            </div>
        </>
    )
}

export default MainProposalDashboard
