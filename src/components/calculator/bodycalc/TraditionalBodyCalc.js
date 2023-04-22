import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles/calculator/bodycalc/TraditionalBodyCalc.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function TraditionalBodyCalc({ onValueChange }) {
    const [btnloading, setbtnloading] = useState(false)
    const [btndisable, setbtndisable] = useState(false);
    const [teData, setTeData] = useState({
        teConsumption: null,
        teCountry: null,
    });

    const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMWU3MzVmMTgzYWJjYTkzMWIzMWM4NDNhMTFhZmYxMWM0MGQ4NzlmMDVjNzM0ZTMzMjQ5MzI5Y2MwZTkxYmUyMWYyNTVjZjIzYTRlMjBiNmYiLCJpYXQiOjE2ODE1NTg3OTUsIm5iZiI6MTY4MTU1ODc5NSwiZXhwIjoxNzEzMTgxMTk1LCJzdWIiOiI0MTM0Iiwic2NvcGVzIjpbXX0.ZVntnNAix7jwIa4YfecWb0IjI_KK4aDEp0ZTF1ihYxs-121_3lD2px_B3EVSW28hzHIjn3Ctz8gP-j9r_-f9gw";

    // console.log(apiKey)
    const teSubmitData = async () => {
        console.log(apiKey)
        const data = {
            consumption: teData.teConsumption,
            location: teData.teCountry,
        };

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://app.trycarbonapi.com/api/traditionalHydro?consumption=${teData.teConsumption}&location=${teData.teCountry}`,
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
            data: data,
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
            // console.log(response)
            const teResult = JSON.stringify(response.data.carbon);
            alert(`Carbon Emission: ${teResult}`);
            console.log(teResult)
            const numbers = teResult.match(/\d+(\.\d+)?/g);
            const value = numbers[0];
            // alert(value)
            setbtndisable(false)
            setbtnloading(false)
            onValueChange(value);

        } catch (error) {
            console.log(error);
            setbtnloading(false)
            setbtndisable(false)
        }
    };

    return (
        <>
            <div className='house-form'>
                <div className='form-content1'>
                    <label className='house-form__label'>Traditional Energy</label>
                    <div className='formMain'>
                        <div className='form-group bottom35'>
                            <label className='house-form__label1'>Calculate CO2e from the use of traditional hydro provider.</label>
                        </div>
                        <div className='traditionalCountry-ip'>
                            <div className='form-group'>
                                <label className='house-form__label2'>Consumption:</label>
                                <input className='form-control' type='text' placeholder='in kwh' required id='tempN' name='tempN' onChange={(e) => setTeData({ ...teData, teConsumption: e.target.value })} />
                            </div>
                        </div>
                        <div className='traditionalCountry-dd'>
                            <div className='form-group bottom35'>
                                <label className='house-form__label2'>The country or continent providing the hydro:</label>
                                <div className='dropdown'>
                                    <select className='form-control' id='country' name='country' onChange={(e) => {
                                        setTeData({ ...teData, teCountry: e.target.value })
                                    }}>
                                        <option value='Default'>Select Country</option>
                                        <option value='USA'>USA</option>
                                        <option value='Canada'>Canada</option>
                                        <option value='UK'>UK</option>
                                        <option value='Europe'>Europe</option>
                                        <option value='Africa'>Africa</option>
                                        <option value='LatinAmerica'>Latin America</option>
                                        <option value='MiddleEast'>Middle East</option>
                                        <option value='OtherCountry'>Other Country</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='traditionalbtn col-sm-12 mt-4'>
                            <button type='submit' className='house-form__button primary p-2' id='submit_btn' disabled={btndisable} style={{ width: 'fit-content' }} onClick={() => teSubmitData()}>
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
            {/* </form> */}
        </>
    )
}
export default TraditionalBodyCalc