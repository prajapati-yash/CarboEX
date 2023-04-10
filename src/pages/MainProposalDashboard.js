import React from 'react'
import '../styles/DAOMember/MainProposalDashboard.css'


const MainPropPageData = {
    logo: "../assets/logo/carboEx_Logo.png",
    name: "Example Name",
    wallAddress: "0x30313bjh9yjhk90h06D69C10710EaE148C8410E1",
    email: "example@gmail.com",
    availableCredits: "25",
}

function MainProposalDashboard() {
    return (
        <>
            <div class="container-fluid main-prop-dash-Main">
                <div class="row justify-content-center">
                    <div class="col-lg-2 col-md-3 col-sm-4 DAO-Member-logo-class">
                        <img src={MainPropPageData.logo} alt="Logo" class="DAO-Member-logo img-fluid" />
                    </div>
                    <div class="col-lg-8 col-md-6 col-sm-4 DaoMemberDetails-class">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 mb-3">
                                <label class="PropHeadLabel">Company Name:</label>
                                <input type="text" class="form-control" value={MainPropPageData.name} readOnly />
                            </div>
                            <div class="col-lg-6 col-md-12 mb-3">
                                <label class="PropHeadLabel">Wallet Address:</label>
                                <input type="text" class="form-control" value={MainPropPageData.wallAddress} readOnly />
                            </div>
                            <div class="col-lg-6 col-md-12 mb-3">
                                <label class="PropHeadLabel">Email:</label>
                                <input type="email" class="form-control" value={MainPropPageData.email} readOnly />
                            </div>
                            <div class="col-lg-6 col-md-12 mb-3">
                                <label class="PropHeadLabel">Credits Available:</label>
                                <input type="text" class="form-control" value={MainPropPageData.availableCredits} readOnly />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex justify-content-end">
                        <div className='PDataPage-content-Btns-body d-flex justify-content-center align-items-center col-8 mx-auto'>
                            <div className='PDataPage-content-Btns '>
                                <div className='PDataPage-RA-Btns d-flex justify-content-center align-items-center'>
                                    <button className='PData-reject-btn  rounded-pill'>EDIT</button>
                                </div>
                                <div className='PDataPage-RA-Btns'>
                                    <button className='PData-approve-btn  rounded-pill'>SELL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='Member-prop-orders-class'>
                    <div className="Member-prop-orders-Btns row">
                        <button type="button" class="Member-prop-Btn col-12 col-md-5">My proposal</button>
                        <button type="button" class="Member-orders-Btn col-12 col-md-5">My orders</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MainProposalDashboard