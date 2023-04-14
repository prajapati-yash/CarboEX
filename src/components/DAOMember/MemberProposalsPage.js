import React, { useEffect } from 'react'
import '../../styles/DAOMember/MemberProposalsPage.css'
import { useState } from 'react';
import { ethers } from 'ethers';
import { daoInstance } from '../Contracts';
import { useNavigate } from 'react-router-dom';

function MemberProposalsPage() {
    // const [id, setId] = useState("")
    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");
    const [allPData, setAllPData] = useState([]);

    const daoProposal = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                if (!provider) {
                    console.log("Metamask is not installed, please install!");
                }
                const con = await daoInstance();
                const daoPData = await con.getAllProposal();
                setAllPData(daoPData)
                console.log(daoPData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        daoProposal()
    }, [])



    const navigate = useNavigate();
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
                                {allPData.map((item, key) => (
                                    <div className='MPPage-content-data  col-6 col-md-5 my-3' key={key}>
                                        <label className='MPPage-Prop-Label'>Type:</label> <span>{item[3] ? "Emission" : "Offset"}</span>  <br />
                                        <label className='MPPage-Prop-Label'>Description:</label> <span>{item[1]}</span>
                                        <div className='MPPage-VM-Btn-class d-flex justify-content-center'>
                                            <button className='MPPage-VM-Btn mt-2' onClick={() => navigate("/proposalData", { state: { data: allPData[key] } })}>Open</button>
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberProposalsPage