import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import axios from 'axios'
import { useState} from 'react'
import  {ToastContainer,toast}  from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function FuelToCo2Calc({ onValueChange, props }) {
    const [btnloading, setbtnloading]=useState(false)

    const [ftcData1, setftcData] = useState({
        ftcType: null,
        ftcLitres: null
    })

    var data = {
        type: ftcData1.ftcType,
        litres: ftcData1.ftcLitres,
    };
    // var data = JSON.stringify(`{\n      "type": ${ftcData1.ftcType},\n      "litres": ${ftcData1.ftcLitres}\n      }: ''`);
    const apiKey = process.env.REACT_APP_API_BEARER_TOKEN;
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://app.trycarbonapi.com/api/fuelToCO2e?type=${ftcData1.ftcType}&litres=${ftcData1.ftcLitres}`,
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };


    // useEffect(() => {
    //     console.log(ftcData1);
    // }, [ftcData1]);


    const ftcSubmitData = async () => {
        console.log(`${ftcData1.ftcType} ${ftcData1.ftcLitres}`)
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
                    <label className='publicT-form__label'>Fuel To CO2e</label>
                    <div className='formMain'>
                        <div className='form-group bottom35'>
                            <label className='publicT-form__label1'>Transform liters of Diesel, Petrol or LPG into CO2 Equivalent in Kg.</label>
                        </div>
                        <div className='traditionalCountry-ip'>
                            <div className='form-group '>
                                <label className='publicT-form__label2 '>Litres:</label>
                                <input className='form-control' type='text' placeholder='The number of litres to calculate from.' required id='last_name' name='last_name' onChange={(e3) => {
                                    setftcData({ ...ftcData1, ftcLitres: e3.target.value })
                                }} />
                            </div>
                        </div>
                        <div className='traditionalCountry-dd'>
                            <div className='form-group bottom35'>
                                <label className='publicT-form__label2'>Type:</label>

                                <div className="dropdown">
                                    <select className='form-control' id='pt-type' name='pt-type' onChange={(e3) => {
                                        setftcData({ ...ftcData1, ftcType: e3.target.value })
                                    }}>
                                        <option value='Default'>Select type</option>
                                        <option value='Petrol'>Petrol</option>
                                        <option value='Diesel'>Diesel</option>
                                        <option value='LPG'>LPG</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='pTbtn col-sm-12 mt-4'>
                            <button type='submit' className='publicT-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => ftcSubmitData()}>
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

export default FuelToCo2Calc