import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import HeadCalculator from '../headcalc/HeadCalculator'
import axios from 'axios'
import { useState, useEffect } from 'react'
import StoreCalculation from '../storecalculation/StoreCalculation'

function PublicTransitCalc({ setResultCalcAll }) {

    const [ptData1, setPtData] = useState({
        ptDistance: null,
        ptType: null
    })
    const [calcResult, setCalcResult] = useState();


    var data = JSON.stringify(`{\n      "distance": ${ptData1.ptDistance},\n      "type": ${ptData1.ptType}\n      }: ''`);

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://app.trycarbonapi.com/api/publicTransit?distance=${ptData1.ptDistance}&type=${ptData1.ptType}`,
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiODk3YjJkMzQ3YzIzYjdjNzBjNzlmOGQyNjhiYzYxYzM4NDk4NDI3YjJlZDcyMzgwNDc5MDlhNmJhMDlkZjM4MTU1NmIxZjQ3ZmE4ZWQ0NzAiLCJpYXQiOjE2Nzk4MjgxNjksIm5iZiI6MTY3OTgyODE2OSwiZXhwIjoxNzExNDUwNTY3LCJzdWIiOiI0MDQ0Iiwic2NvcGVzIjpbXX0.pq124WIoqCFFVR5CjXtOwM9_N_qYJDcNYSl7tLs-Epy0q77e4sceGkhT-ygmg7ELvSz1OVyQrCnPPdeaEm2puw',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };


    // useEffect(() => {
    //     console.log(ptData1);
    // }, [ptData1]);


    const ptSubmitData = async () => {
        // console.log(`${ptData1.ptDistance} ${ptData1.ptType}`)
        // const ptResult2 = await console.log(ptResult);
        // console.log(ptResult2)
        await axios(config)
            .then(function (response) {
                const ptResult = JSON.stringify(response.data.carbon);
                alert(`Carbon: ${ptResult}`);
                console.log(`Carbon: ${ptResult}`);
                const numbers = ptResult.match(/\d+(\.\d+)?/g);
                // console.log(numbers[0]);
                const demo = numbers[0];
                console.log(demo)
                // const demo = setCalcResult(numbers[0]);
                // setResultCalcAll(prevValues => ({ ...prevValues, PublicTransitCalc: demo }));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // useEffect(() => {
    //     setResultCalcAll(prevValues => ({ ...prevValues, PublicTransitCalc: calcResult }));
    // }, [calcResult, setResultCalcAll]);

    return (
        <>
            <div className='publicTransit-form'>
                <div className='form-content1'>
                    <label className='publicT-form__label'>Public Transit</label>
                    <div className='formMain'>
                        <div className='form-group bottom35'>
                            <label className='publicT-form__label1'>Return CO2e in Kg from the use of public transporation.</label>
                        </div>
                        <div className='traditionalCountry-ip'>
                            <div className='form-group '>
                                <label className='publicT-form__label2 '>Distance:</label>
                                <input className='form-control' type='text' placeholder='The distance in KM.' required id='last_name' name='last_name' onChange={(e1) => {
                                    setPtData({ ...ptData1, ptDistance: e1.target.value })
                                }} />
                            </div>
                        </div>
                        <div className='traditionalCountry-dd'>
                            <div className='form-group bottom35'>
                                <label className='publicT-form__label2'>Type:</label>

                                <div className="dropdown">
                                    <select className='form-control' id='pt-type' name='pt-type' onChange={(e1) => {
                                        setPtData({ ...ptData1, ptType: e1.target.value })
                                    }}>
                                        <option value='Default'>Select Type</option>
                                        <option value='Taxi'>Taxi</option>
                                        <option value='ClassicBus'>Classic Bus</option>
                                        <option value='EcoBus'>Eco Bus</option>
                                        <option value='Coach'>Coach</option>
                                        <option value='NationalTrain'>National Train</option>
                                        <option value='LightRail'>Light Rail</option>
                                        <option value='Subway'>Subway</option>
                                        <option value='FerryOnFoot'>FerryOnFoot</option>
                                        <option value='FerryInCar'>FerryInCar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='pTbtn col-sm-12 mt-4'>
                            <button type='submit' className='publicT-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => ptSubmitData()}>
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PublicTransitCalc