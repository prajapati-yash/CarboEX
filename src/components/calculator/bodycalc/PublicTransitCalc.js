import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function PublicTransitCalc({ onValueChange, props }) {
    const navigate = useNavigate();
    const [btnloading, setbtnloading] = useState(false)
    const [btndisable, setbtndisable] = useState(false);
    const [ptData1, setPtData] = useState({
        ptDistance: null,
        ptType: null
    })

    const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMWU3MzVmMTgzYWJjYTkzMWIzMWM4NDNhMTFhZmYxMWM0MGQ4NzlmMDVjNzM0ZTMzMjQ5MzI5Y2MwZTkxYmUyMWYyNTVjZjIzYTRlMjBiNmYiLCJpYXQiOjE2ODE1NTg3OTUsIm5iZiI6MTY4MTU1ODc5NSwiZXhwIjoxNzEzMTgxMTk1LCJzdWIiOiI0MTM0Iiwic2NvcGVzIjpbXX0.ZVntnNAix7jwIa4YfecWb0IjI_KK4aDEp0ZTF1ihYxs-121_3lD2px_B3EVSW28hzHIjn3Ctz8gP-j9r_-f9gw";

    // useEffect(() => {
    //     console.log(ptData1);
    // }, [ptData1]);

    const ptSubmitData = async () => {
        var data = {
            distance: ptData1.ptDistance,
            type: ptData1.ptType,
        };

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://app.trycarbonapi.com/api/publicTransit?distance=${ptData1.ptDistance}&type=${ptData1.ptType}`,
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                // 'Content-Type': 'application/x-www-form-urlencoded',
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
            const ptResult = JSON.stringify(response.data.carbon);
            alert(`Carbon Emission: ${ptResult}`);
            navigate('/calculator/fueltoco2')
            // console.log(`Carbon: ${ptResult}`);
            const numbers = ptResult.match(/\d+(\.\d+)?/g);
            // console.log(numbers[0]);
            const demo = numbers[0];
            // alert(demo)
            setbtndisable(false)
            setbtnloading(false)
            console.log(demo)
            // const value = ptResult
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
                    <b className='title-te-class-main'>Public Transit</b>
                    {/* </label> */}
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
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='pTbtn col-sm-12 mt-4'>
                                <button type='submit' className='publicT-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => ptSubmitData()}>
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

export default PublicTransitCalc