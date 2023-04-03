import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import StoreCalculation from '../storecalculation/StoreCalculation'

function FlightCalc({ onValueChange, props }) {

    const [fData1, setFData] = useState({
        fDistance: null,
        fType: null
    })

    var data = {
        type: fData1.fType,
        distance: fData1.fDistance,
    };
    // var data = JSON.stringify(`{\n      "distance": ${fData1.fDistance},\n      "type": ${fData1.fType}\n      }: ''`);
    const apiKey = process.env.REACT_APP_API_BEARER_TOKEN;
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://app.trycarbonapi.com/api/flight?distance=${fData1.fDistance}&type=${fData1.fType}`,
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };


    // useEffect(() => {
    //     console.log(fData1);
    // }, [fData1]);


    const fSubmitData = async () => {
        // console.log(`${fData1.fDistance} ${fData1.fType}`)
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
                    <label className='publicT-form__label'>Flight</label>
                    <div className='formMain'>
                        <div className='form-group bottom35'>
                            <label className='publicT-form__label1'>Calculate CO2e in Kg from a travel by air.</label>
                        </div>
                        <div className='traditionalCountry-ip'>
                            <div className='form-group '>
                                <label className='publicT-form__label2 '>Distance:</label>
                                <input className='form-control' type='text' placeholder='The distance in KM.' required id='last_name' name='last_name' onChange={(e4) => {
                                    setFData({ ...fData1, fDistance: e4.target.value })
                                }} />
                            </div>
                        </div>
                        <div className='traditionalCountry-dd'>
                            <div className='form-group bottom35'>
                                <label className='publicT-form__label2'>Type:</label>

                                <div className="dropdown">
                                    <select className='form-control' id='pt-type' name='pt-type' onChange={(e4) => {
                                        setFData({ ...fData1, fType: e4.target.value })
                                    }}>
                                        <option value='Default'>Select</option>
                                        <option value='DomesticFlight'>Domestic Flight</option>
                                        <option value='ShortEconomyClassFlight'>Short Economy Class Flight</option>
                                        <option value='ShortBusinessClassFlight'>Short Business Class Flight</option>
                                        <option value='LongEconomyClassFlight'>Long Economy Class Flight</option>
                                        <option value='LongPremiumClassFlight'>Long Premium Class Flight</option>
                                        <option value='LongBusinessClassFlight'>Long Business Class Flight</option>
                                        <option value='LongFirstClassFlight'>Long First Class Flight</option>
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

export default FlightCalc