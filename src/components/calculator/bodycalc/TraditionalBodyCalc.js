import React, { useState } from 'react';
import axios from 'axios';
import StoreCalculation from '../storecalculation/StoreCalculation';
import '../../../styles/calculator/bodycalc/TraditionalBodyCalc.css';
// import dotenv from 'dotenv';

function TraditionalBodyCalc({ onValueChange }) {
    const [teData, setTeData] = useState({
        teConsumption: null,
        teCountry: null,
    });
    // const apiKey = process.env.API_BEARER_TOKEN || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNWQ3OWMwYjVmODdmODBkMDA1YTFjZWI4MWI1OGFlZThjN2ZlOTQ5NDIwYmFkODMxNGIxMDZmODRkNzdiZjBiMjY1YzZhZjI0NmRjMDFmYmQiLCJpYXQiOjE2ODAwNzQxMTgsIm5iZiI6MTY4MDA3NDExOCwiZXhwIjoxNzExNjk2NTE4LCJzdWIiOiI0MDY0Iiwic2NvcGVzIjpbXX0.cN3WCdheF7uezNVs8mQ4IFE0sQfEUBRNA6fkR8a2okkkqBAmr2XMZIBtFtdwi78-hRdzZcAjj_1uMZyb77LkSA';
    // // console.log(apiKey)
    const teSubmitData = async () => {
        // console.log(apiKey)
        const data = {
            consumption: teData.teConsumption,
            location: teData.teCountry,
        };

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://app.trycarbonapi.com/api/traditionalHydro?consumption=${teData.teConsumption}&location=${teData.teCountry}`,
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNWQ3OWMwYjVmODdmODBkMDA1YTFjZWI4MWI1OGFlZThjN2ZlOTQ5NDIwYmFkODMxNGIxMDZmODRkNzdiZjBiMjY1YzZhZjI0NmRjMDFmYmQiLCJpYXQiOjE2ODAwNzQxMTgsIm5iZiI6MTY4MDA3NDExOCwiZXhwIjoxNzExNjk2NTE4LCJzdWIiOiI0MDY0Iiwic2NvcGVzIjpbXX0.cN3WCdheF7uezNVs8mQ4IFE0sQfEUBRNA6fkR8a2okkkqBAmr2XMZIBtFtdwi78-hRdzZcAjj_1uMZyb77LkSA',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            console.log(response)
            const teResult = JSON.stringify(response.data.carbon);
            console.log(teResult)
            const numbers = teResult.match(/\d+(\.\d+)?/g);
            const value = numbers[0];
            alert(value)
            onValueChange(value);
        } catch (error) {
            console.log(error);
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
                            <button type='submit' className='house-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => teSubmitData()}>
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </form> */}
        </>
    )
}
export default TraditionalBodyCalc