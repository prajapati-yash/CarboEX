import React, { useEffect } from 'react'
import '../../styles/DAOMember/MemberProposalsPage.css'
import { useState } from 'react';
import { ethers } from 'ethers';
import { daoInstance } from '../Contracts';
import { useNavigate } from 'react-router-dom';

function MemberProposalsPage() {
    const navigate = useNavigate();
    const [allResultData, setAllResultData] = useState([]);
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
                console.log(allPData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        daoProposal()
    }, [])


    const daoResultProposal2 = async () => {
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
                console.log(allPData)
                // console.log(allPData[3][10]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // const daoResultProposal = async (rId) => {
    //     try {
    //         const { ethereum } = window;
    //         if (ethereum) {
    //             const provider = new ethers.providers.Web3Provider(ethereum);
    //             const signer = provider.getSigner();
    //             if (!provider) {
    //                 console.log("Metamask is not installed, please install!");
    //             }
    //             const con = await daoInstance();
    //             const getResult = await con.getProposalResult(rId);
    //             setAllResultData(getResult)
    //             console.log(allPData);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    function hexToTimestamp(hex) {
        const unixTimestamp = parseInt(hex, 16);
        const date = new Date(unixTimestamp * 1000);
        const localDate = date.toLocaleString('en-US');
        return localDate;
    }

    return (
        <>
            <div className='container-fluid MPPageBg'>
                <div className='MPPage-content pb-4'>
                    <div className="MPPage-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>ACTIVE PROPOSALS</p>
                    </div>
                    <div className='MPPage-content d-lg-flex row pb-4 align-items-center justify-content-around'>
                        <div className="MPPage-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4">
                            <div className='MPPage-content-box row'>
                                {allPData.filter((item) => item[10] === "" && hexToTimestamp(item[9]) < Date()).map((item, key) => (
                                    // {/* {allPData.map((item, key) => ( */}
                                    <div className='MPPage-content-data  col-6 col-md-5 my-3' key={key} >
                                        <label className='MPPage-Prop-Label'>Type:</label> <span>{item[3] ? "Emission" : "Offset"}</span>  <br />
                                        <label className='MPPage-Prop-Label'>Description:</label> <span>{item[1]}</span>
                                        <div className='MPPage-VM-Btn-class d-flex justify-content-center'>
                                            <button className='MPPage-VM-Btn mt-2' onClick={() => navigate("/proposalData", { state: { data: item } })}>Open</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* <button onClick={daoProposal}>click to get the type</button>
            <button onClick={daoResultProposal2}>click to get the data</button> */}
        </>
    )
}

export default MemberProposalsPage