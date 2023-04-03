import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import StoreCalculation from '../storecalculation/StoreCalculation'

function CarTravelCalc({ onValueChange, props }) {

    const [ctData1, setCtData] = useState({
        ctDistance: null,
        ctVehicle: null
    })

    var data = {
        vehicle: ctData1.ctVehicle,
        distance: ctData1.ctDistance,
    };
    // var data = JSON.stringify(`{\n      "dictance": ${ctData1.ctDistance},\n      "vehicle": ${ctData1.ctVehicle}\n      }: ''`);
    const apiKey = process.env.REACT_APP_API_BEARER_TOKEN;
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://app.trycarbonapi.com/api/carTravel?distance=${ctData1.ctDistance}&vehicle=${ctData1.ctVehicle}`,
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };


    // useEffect(() => {
    //     console.log(ctData1);
    // }, [ctData1]);


    const ftcSubmitData = async () => {
        // console.log(`${ctData1.ctDistance} ${ctData1.ctVehicle}`)
        // console.log(`${data.distance} ${data.vehicle}`)
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
                    <label className='publicT-form__label'>Car Travel</label>
                    <div className='formMain'>
                        <div className='form-group bottom35'>
                            <label className='publicT-form__label1'>Returns the CO2e in Kg from a travel by car.</label>
                        </div>
                        <div className='traditionalCountry-ip'>
                            <div className='form-group '>
                                <label className='publicT-form__label2 '>Distance:</label>
                                <input className='form-control' type='text' placeholder='The distance in KM.' required id='last_name' name='last_name' onChange={(e4) => {
                                    setCtData({ ...ctData1, ctDistance: e4.target.value })
                                }} />
                            </div>
                        </div>
                        <div className='traditionalCountry-dd'>
                            <div className='form-group bottom35'>
                                <label className='publicT-form__label2'>Vehicle:</label>

                                <div className="dropdown">
                                    <select className='form-control' id='pt-type' name='pt-type' onChange={(e4) => {
                                        setCtData({ ...ctData1, ctVehicle: e4.target.value })
                                    }}>
                                        <option value='Default'>Select</option>
                                        <option value='SmallDieselCar'>Small Diesel Car</option>
                                        <option value='MediumDieselCar'>Medium Diesel Car</option>
                                        <option value='LargeDieselCar'>Large Diesel Car</option>
                                        <option value='MediumHybridCar'>Medium Hybrid Car</option>
                                        <option value='LargeHybridCar'>Large Hybrid Car</option>
                                        <option value='MediumLPGCar'>Medium LPG Car</option>
                                        <option value='LargeLPGCar'>Large LPG Car</option>
                                        <option value='MediumCNGCar'>MediumCNGCar</option>
                                        <option value='LargeCNGCar'>Large CNG Car</option>
                                        <option value='SmallPetrolVan'>Small Petrol Van</option>
                                        <option value='LargePetrolVan'>Large Petrol Van</option>
                                        <option value='SmallDielselVan'>Small Dielsel Van</option>
                                        <option value='MediumDielselVan'>Medium Dielsel Van</option>
                                        <option value='LargeDielselVan'>Large Dielsel Van</option>
                                        <option value='LPGVan'>LPG Van</option>
                                        <option value='CNGVan'>CNG Van</option>
                                        <option value='SmallPetrolCar'>Small Petrol Car</option>
                                        <option value='MediumPetrolCar'>Medium Petrol Car</option>
                                        <option value='LargePetrolCar'>Large Petrol Car</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='pTbtn col-sm-12 mt-4'>
                            <button type='submit' className='publicT-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => ftcSubmitData()}>
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarTravelCalc