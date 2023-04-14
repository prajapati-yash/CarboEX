import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import axios from 'axios'
import { useState } from 'react'
import  {ToastContainer,toast}  from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import StoreCalculation from '../storecalculation/StoreCalculation'

function MotorBikeCalc({ onValueChange, props }) {
    const [btnloading,setbtnloading]  = useState(false)

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
            .then(function (response) {
                const ftcResult = JSON.stringify(response.data);
                // alert(`Carbon: ${ftcResult}`);
                console.log(`Carbon: ${ftcResult}`);
                const numbers = ftcResult.match(/\d+(\.\d+)?/g);
                // console.log(numbers[0]);
                const demo = numbers[0];
                alert(demo)
                setbtnloading(false)
                console.log(demo)

                // const value = ftcResult
                const value = demo
                onValueChange(value);
            })
            .catch(function (error) {
                console.log(error);
                setbtnloading(false)
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
                            {btnloading?(
                                    <svg
                                    className="animate-spin button-spin-svg-pic"
                                    version="1.1"
                                    id="L9"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 100 100"
                                    style={{width:"10%"}}
                                  >
                                    <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
                                  </svg>
                                ):(<>Calculate</>)}
                            </button>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MotorBikeCalc