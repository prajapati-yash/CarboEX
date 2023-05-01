import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import axios from 'axios'
import { useState, } from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function FlightCalc({ onValueChange, props }) {
    const navigate = useNavigate();
    const [btnloading, setbtnloading] = useState(false)
    const [btndisable, setbtndisable] = useState(false);
    const [fData1, setFData] = useState({
        fDistance: null,
        fType: null
    })


    // var data = JSON.stringify(`{\n      "distance": ${fData1.fDistance},\n      "type": ${fData1.fType}\n      }: ''`);
    const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMWU3MzVmMTgzYWJjYTkzMWIzMWM4NDNhMTFhZmYxMWM0MGQ4NzlmMDVjNzM0ZTMzMjQ5MzI5Y2MwZTkxYmUyMWYyNTVjZjIzYTRlMjBiNmYiLCJpYXQiOjE2ODE1NTg3OTUsIm5iZiI6MTY4MTU1ODc5NSwiZXhwIjoxNzEzMTgxMTk1LCJzdWIiOiI0MTM0Iiwic2NvcGVzIjpbXX0.ZVntnNAix7jwIa4YfecWb0IjI_KK4aDEp0ZTF1ihYxs-121_3lD2px_B3EVSW28hzHIjn3Ctz8gP-j9r_-f9gw";


    // useEffect(() => {
    //     console.log(fData1);
    // }, [fData1]);

    const fSubmitData = async () => {
        var data = {
            type: fData1.fType,
            distance: fData1.fDistance,
        };
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
        // console.log(`${fData1.fDistance} ${fData1.fType}`)
        // console.log(`${data.distance} ${data.type}`)
        // const ftcResult2 = await console.log(ftcResult);
        // console.log(ftcResult2)
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
            alert(`Carbon Emisson: ${ftcResult}`);

            navigate('/approach/calculator/motorbike')
            console.log(`Carbon Emission: ${ftcResult}`);
            const numbers = ftcResult.match(/\d+(\.\d+)?/g);
            // console.log(numbers[0]);
            const demo = numbers[0];
            // alert(demo)
            console.log(demo)
            setbtnloading(false)
            // const value = ftcResult
            const value = demo
            onValueChange(value);
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
                    {/* <label className='publicT-form__label'> */}
                    <b className='title-te-class-main'>Flight</b>
                    {/* </label> */}
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
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='flTbtn col-sm-12 mt-4'>
                                <button type='submit' className='publicT-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => fSubmitData()}>
                                    {btnloading ? (
                                        <svg
                                            className="animate-spin button-spin-svg-pic"
                                            version="1.1"
                                            id="L9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 100 100"
                                            style={{ width: "40%" }}
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
            </div>
        </>
    )
}

export default FlightCalc