import React from 'react'
import '../../styles/DAOMember/MemberProposalsPage.css'

const proposalData = [
    {
        id: 1,
        name: "Proposal 1",
        description: "The Carbon Trading Platform Using Blockchain is a decentralised application that aims to facilitate carbon credit trading by creating an unchangeable and tamper-proof record of transactions. It will enable buyers and sellers of carbon credits to conduct safe, open transactions."
    },
    {
        id: 2,
        name: "Proposal 2",
        description: "The Carbon Trading Platform Using Blockchain is a decentralised application that aims to facilitate carbon credit trading by creating an unchangeable and tamper-proof record of transactions. It will enable buyers and sellers of carbon credits to conduct safe, open transactions."
    },
    {
        id: 3,
        name: "Proposal 3",
        description: "The Carbon Trading Platform Using Blockchain is a decentralised application that aims to facilitate carbon credit trading by creating an unchangeable and tamper-proof record of transactions. It will enable buyers and sellers of carbon credits to conduct safe, open transactions."
    },
    {
        id: 4,
        name: "Proposal 4",
        description: "The Carbon Trading Platform Using Blockchain is a decentralised application that aims to facilitate carbon credit trading by creating an unchangeable and tamper-proof record of transactions. It will enable buyers and sellers of carbon credits to conduct safe, open transactions."
    },
    {
        id: 5,
        name: "Proposal 5",
        description: "The Carbon Trading Platform Using Blockchain is a decentralised application that aims to facilitate carbon credit trading by creating an unchangeable and tamper-proof record of transactions. It will enable buyers and sellers of carbon credits to conduct safe, open transactions."
    },
]

function MemberProposalsPage() {
    return (
        <>
            <div className='container-fluid MPPageBg'>
                <div className='MPPage-content pb-4'>
                    <div className="MPPage-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>PROPOSALS</p>
                    </div>
                    <div className='MPPage-content d-lg-flex row pb-4 align-items-center justify-content-around'>
                        <div className="MPPage-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4">
                            <div className='MPPage-content-box row'>
                                {proposalData.map((item) => (
                                    <div className='MPPage-content-data  col-6 col-md-5 my-3' key={item.id}>
                                        <label className='MPPage-Prop-Label'>Name:</label> <span>{item.name}</span>  <br />
                                        <label className='MPPage-Prop-Label'>Description:</label> <span>{item.description}</span>
                                        <div className='d-flex justify-content-center'>
                                            <button className='MPPage-VM-Btn mt-2'>Open</button>

                                        </div>
                                    </div>))}
                                {/* <div className='MPPage-content-data col-6 col-md-5'>
                                    <label className='MPPage-Prop-Label'>Name:</label><br />
                                    <label className='MPPage-Prop-Label'>Description:</label>
                                    <button className='MPPage-VM-Btn'>Open</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberProposalsPage