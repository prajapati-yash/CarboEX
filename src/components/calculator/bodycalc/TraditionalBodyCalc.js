import React, { Fragment } from 'react'
import '../../../styles/calculator/bodycalc/TraditionalBodyCalc.css'
import HeadCalculator from '../headcalc/HeadCalculator'
import axios from 'axios'

import { useState, useEffect } from 'react'

function TraditionalBodyCalc() {

    const [data1, setData] = useState({
        consumption: null,
        country: null
    })

    var data = JSON.stringify(`{\n      "consumption": ${data1.consumption},\n      "location": ${data1.country}\n      }: ''`);

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://app.trycarbonapi.com/api/traditionalHydro?consumption=${data1.consumption}&location=${data1.country}`,
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiY2M1MDFjMDgwMjMzOTEwYTVmZGI2NGFiMmEyNDRkOTJiZmZmYTYyZTA2YTgwODVhZDQ0MTk3OTZlNWVhYTc0MWYyMWY5ZGJiNGEwNDM0MWQiLCJpYXQiOjE2NzkzMTkyMTUsIm5iZiI6MTY3OTMxOTIxNSwiZXhwIjoxNzEwOTQxNjE0LCJzdWIiOiIzODc0Iiwic2NvcGVzIjpbXX0.IqbGwufGxWYYVqZE1jl9TxtJW5leAnuURTXXck_kI_-rnw1keqySWW1F8XaHbrnHgrrmK0d2F7XCherCVDhqeQ',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'XSRF-TOKEN=eyJpdiI6InFBcjQ0U3laL1EvczNWa01icnVhdkE9PSIsInZhbHVlIjoiVGZFM3pLMi8vbmVIcGVYd1pIQTZaenExek1nVmVXRHZHUkpITnhaSGdvc0lwWHc3LzNuOCszSTBDcGJjbGJWYkRyYkJJcGEyeWdtZlRvWVkzMGYzaktFd0M1Zk4wNXRKWkpIbWpQbnIvZXVUWFB5Q1R3c1hUY1U4STVJTTRLdXYiLCJtYWMiOiI3YjUwYTY4YWNkYjg3MjcxMzg3YTc4OTJkZmM1ZDNmN2ZkMzlhNzAxNDI4NTcyYmE0ZDA3YzgyOWE3MzdhZDE4In0%3D; trycarbonapi_session=eyJpdiI6InBpQnhMS2hyZnJuTEl3aEc2OHpuY2c9PSIsInZhbHVlIjoiZk5mZ291WG5Rc01WdFhKVUJPbjg1Y1pIbHowY1Zpa1V3dEluSXp6VzdQNjNDYzhFejVVWXlaS0gwNGlwQkxYSW52MlZKT1pGSlRtMVZLT1lsUTBXMlhJeXJiOE5DWE40OHgwQmxnd0xWV0ZxZmNzVy9lQ0JRY05lUC9jUER3cG0iLCJtYWMiOiIwY2NjNDljMzMyYmNlNTViMTUyYzhhNDY5ZDEyYTc5ZTFiMjA1NjY4MWRkMmIxY2UyYmU1ZGM1N2NmNTdiN2Q3In0%3D'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });




    useEffect(() => {
        console.log(data1);
    }, [data1]);

    const submitData = async () => {
        alert(`${data1.consumption} ${data1.country}`)
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
                                <input className='form-control' type='text' placeholder='in kwh' required id='tempN' name='tempN' onChange={(e) => {
                                    setData({ ...data1, consumption: e.target.value })
                                }} />
                            </div>
                        </div>


                        <div className='traditionalCountry-dd'>
                            <div className='form-group bottom35'>
                                <label className='house-form__label2'>The country or continent providing the hydro:</label>

                                <div className="dropdown">

                                    <select className='form-control' id='country' name='country' onChange={(e) => {
                                        setData({ ...data1, country: e.target.value })
                                    }}>
                                        <option value='Default'>Select Country</option>
                                        <option value='USA'>USA</option>
                                        <option value='Canada'>Canada</option>
                                        <option value='UK'>UK</option>
                                        <option value='Europe'>Europe</option>
                                        <option value='Africa'>Africa</option>
                                        <option value='Latin-America'>Latin America</option>
                                        <option value='Middle-East'>Middle East</option>
                                        <option value='Other-Country'>Other Country</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='traditionalbtn col-sm-12 mt-4'>
                            <button type='submit' className='house-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => submitData()}>
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
// function DisplayValues() {
//     const val1 = document.getElementById('tempN');
//     const val2 = document.getElementById('country');
//     alert(`${val1.value} ${val2.value}`);
//     console.log(val1.value);
//     console.log(val2.value);

// }
export default TraditionalBodyCalc