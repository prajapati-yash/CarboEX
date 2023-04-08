import React from 'react'
import '../../styles/DAOMember/ProposalData.css'
function ProposalData() {
    return (
        <>
            <div className='container-fluid PDataPageBg'>
                <div className='PDataPage-content pb-4'>
                    <div className="PDataPage-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>PROPOSAL DATA</p>
                    </div>
                    <div className='PDataPage-content d-lg-flex row pb-4 align-items-center justify-content-around'>
                        <div className="PDataPage-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4">
                            <div className='PDataPage-content-box'>
                                <div className='PDataPage-content-title'>ACTIVE</div>
                                <div className='PDataPage-content-dataBody'>
                                    <div className='PDataPage-content-dataItem'>
                                        data
                                    </div>
                                    <div className='PDataPage-content-Btns'>
                                        <button>Reject</button>
                                        <button>Approve</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProposalData