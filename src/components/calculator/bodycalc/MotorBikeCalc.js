import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import StoreCalculation from '../storecalculation/StoreCalculation'

function MotorBikeCalc({ onValueChange, props }) {

    const [mbData1, setMbData] = useState({
        mbDistance: null,
        mbType: null
    })

    var data = {
        type: mbData1.mbType,
        distance: mbData1.mbDistance,
    };
    // var data = JSON.stringify(`{\n      "distance": ${mbData1.mbDistance},\n      "type": ${mbData1.mbType}\n      }: ''`);
    const apiKey = process.env.REACT_APP_API_BEARER_TOKEN;
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://app.trycarbonapi.com/api/motorBike?distance=${mbData1.mbDistance}&type=${mbData1.mbType}`,
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };


    // useEffect(() => {
    //     console.log(mbData1);
    // }, [mbData1]);


    const fSubmitData = async () => {
        // console.log(`${mbData1.mbDistance} ${mbData1.mbType}`)
        // console.log(`${data.distance} ${data.type}`)
        // const ftcResult2 = await console.log(ftcResult);
        // console.log(ftcResult2)
        await axios(config)
            .then(function (response) {
                const ftcResult = JSON.stringify(response.data);
                // alert(`Carbon: ${ftcResult}`);
                console.log(`Carbon: ${ftcResult}`);
                const numbers = ftcResult.match(/\d+(\.\d+)?/g);
                // console.log(numbers[0]);
                const demo = numbers[0];
                // alert(demo)
                console.log(demo)

                // const value = ftcResult
                const value = demo
                onValueChange(value);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <div className='publicTransit-form'>
                <div className='form-content1'>
                    <label className='publicT-form__label'>Motorbike</label>
                    <div className='formMain'>
                        <div className='form-group bottom35'>
                            <label className='publicT-form__label1'>Returns the CO2e in Kg from a motorbike travel.</label>
                        </div>
                        <div className='traditionalCountry-ip'>
                            <div className='form-group '>
                                <label className='publicT-form__label2 '>Distance:</label>
                                <input className='form-control' type='text' placeholder='The distance in KM.' required id='last_name' name='last_name' onChange={(e4) => {
                                    setMbData({ ...mbData1, mbDistance: e4.target.value })
                                }} />
                            </div>
                        </div>
                        <div className='traditionalCountry-dd'>
                            <div className='form-group bottom35'>
                                <label className='publicT-form__label2'>Type:</label>

                                <div className="dropdown">
                                    <select className='form-control' id='pt-type' name='pt-type' onChange={(e4) => {
                                        setMbData({ ...mbData1, mbType: e4.target.value })
                                    }}>
                                        <option value='Default'>Select</option>
                                        <option value='SmallMotorBike'>Small Motor Bike</option>
                                        <option value='MediumMotorBike'>Medium Motor Bike</option>
                                        <option value='LargeMotorBike'>Large Motor Bike</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='pTbtn col-sm-12 mt-4'>
                            <button type='submit' className='publicT-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => fSubmitData()}>
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MotorBikeCalc