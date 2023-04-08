import React from 'react'
import '../../styles/DAOMember/MemberProposalsPage.css'

const proposalData = [
    {
        id: 1,
        name: "ABhishek",
        description: "Hello World!"
    },
    {
        id: 2,
        name: "ABhishek",
        description: "Hello World!"
    },
    {
        id: 3,
        name: "ABhishek",
        description: "Hello World!"
    },
    {
        id: 4,
        name: "ABhishek",
        description: "Hello World!"
    },
    {
        id: 5,
        name: "ABhishek",
        description: "Hello World!"
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
                                            <button className='MPPage-VM-Btn '>Open</button>

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