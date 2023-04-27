import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function CarTravelCalc({ onValueChange, props }) {
    const [btnloading, setbtnloading] = useState(false)
    const [btndisable, setbtndisable] = useState(false);
    const [ctData1, setCtData] = useState({
        ctDistance: null,
        ctVehicle: null
    })

    const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMWU3MzVmMTgzYWJjYTkzMWIzMWM4NDNhMTFhZmYxMWM0MGQ4NzlmMDVjNzM0ZTMzMjQ5MzI5Y2MwZTkxYmUyMWYyNTVjZjIzYTRlMjBiNmYiLCJpYXQiOjE2ODE1NTg3OTUsIm5iZiI6MTY4MTU1ODc5NSwiZXhwIjoxNzEzMTgxMTk1LCJzdWIiOiI0MTM0Iiwic2NvcGVzIjpbXX0.ZVntnNAix7jwIa4YfecWb0IjI_KK4aDEp0ZTF1ihYxs-121_3lD2px_B3EVSW28hzHIjn3Ctz8gP-j9r_-f9gw";


    // useEffect(() => {
    //     console.log(ctData1);
    // }, [ctData1]);

    const ftcSubmitData = async () => {
        // console.log(`${ctData1.ctDistance} ${ctData1.ctVehicle}`)
        // console.log(`${data.distance} ${data.vehicle}`)
        // const ftcResult2 = await console.log(ftcResult);
        // console.log(ftcResult2)
        var data = {
            vehicle: ctData1.ctVehicle,
            distance: ctData1.ctDistance,
        };
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


        try {
            setbtndisable(true)
            toast.info('Calculating', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setbtnloading(true)
            const response = await axios.request(config);
            const ftcResult = JSON.stringify(response.data.carbon);
            alert(`Carbon Emission: ${ftcResult}`);
            console.log(`Carbon Emission: ${ftcResult}`);
            const numbers = ftcResult.match(/\d+(\.\d+)?/g);
            // console.log(numbers[0]);
            const demo = numbers[0];
            // alert(demo)
            console.log(demo)
            // const value = ftcResult
            const value = demo
            onValueChange(value);
            setbtnloading(false)
        } catch (error) {
            console.log(error);
            setbtnloading(false)
            setbtndisable(false)
        }
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
                                {btnloading ? (
                                    <svg
                                        className="animate-spin button-spin-svg-pic"
                                        version="1.1"
                                        id="L9"
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 100 100"
                                        style={{ width: "10%" }}
                                    >
                                        <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
                                    </svg>
                                ) : (<>Calculate</>)}
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarTravelCalc