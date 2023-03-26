import React, { Fragment } from 'react'
import '../../../styles/calculator/bodycalc/TraditionalBodyCalc.css'
import HeadCalculator from '../headcalc/HeadCalculator'
import axios from 'axios'
import { useState, useEffect } from 'react'
import StoreCalculation from '../storecalculation/StoreCalculation'

function TraditionalBodyCalc({ setResultCalcAll }) {
    const [calcResult, setCalcResult] = useState("");
    const [teData1, setTeData] = useState({
        teConsumption: null,
        teCountry: null
    })

    var data = {
        consumption: teData1.teConsumption,
        location: teData1.teCountry,
    };

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://app.trycarbonapi.com/api/traditionalHydro?consumption=${teData1.teConsumption}&location=${teData1.teCountry}`,
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiODk3YjJkMzQ3YzIzYjdjNzBjNzlmOGQyNjhiYzYxYzM4NDk4NDI3YjJlZDcyMzgwNDc5MDlhNmJhMDlkZjM4MTU1NmIxZjQ3ZmE4ZWQ0NzAiLCJpYXQiOjE2Nzk4MjgxNjksIm5iZiI6MTY3OTgyODE2OSwiZXhwIjoxNzExNDUwNTY3LCJzdWIiOiI0MDQ0Iiwic2NvcGVzIjpbXX0.pq124WIoqCFFVR5CjXtOwM9_N_qYJDcNYSl7tLs-Epy0q77e4sceGkhT-ygmg7ELvSz1OVyQrCnPPdeaEm2puw',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };

    const teSubmitData = async () => {
        // console.log(`${teData1.teConsumption} ${teData1.teCountry}`)
        // console.log(data)

        axios.request(config)
            .then((response) => {
                const teResult = JSON.stringify(response.data.carbon);
                alert(`Carbon : ${teResult}`);
                console.log(`Carbon : ${teResult}`);
                const numbers1 = teResult.match(/\d+(\.\d+)?/g);
                // alert(numbers1[0])
                console.log(numbers1[0]);
                // setCalcResult(numbers1[0])
                // setCalcResult(prevValues => ({ ...prevValues, TraditionalBodyCalc: numbers1[0] }));
                // setResultCalcAll = { setResultCalcAll }
                // setCalcResult(prevValues => ({ ...prevValues, TraditionalBodyCalc: setCalcResult(numbers1[0]) }));
            })
            .catch((error) => {
                console.log(error);
            });
    };


    // useEffect(() => {
    //     setResultCalcAll(prevValues => ({ ...prevValues, TraditionalBodyCalc: calcResult }));
    // }, [calcResult, setResultCalcAll]);



    // useEffect(() => {
    //     console.log(teData1);
    // }, [teData1]);


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
                                <input className='form-control' type='text' placeholder='in kwh' required id='tempN' name='tempN' onChange={(e) => {
                                    setTeData({ ...teData1, teConsumption: e.target.value })
                                }} />
                            </div>
                        </div>


                        <div className='traditionalCountry-dd'>
                            <div className='form-group bottom35'>
                                <label className='house-form__label2'>The country or continent providing the hydro:</label>

                                <div className="dropdown">

                                    <select className='form-control' id='country' name='country' onChange={(e) => {
                                        setTeData({ ...teData1, teCountry: e.target.value })
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
                            <button type='submit' className='house-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => teSubmitData()}>
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default TraditionalBodyCalc