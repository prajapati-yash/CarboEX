import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import StoreCalculation from '../storecalculation/StoreCalculation'

function CleanEnergyCalc({ onValueChange, props }) {

    const [ceData1, setCeData] = useState({
        ceEnergy: null,
        ceConsumption: null
    })

    var data = {
        energy: ceData1.ceEnergy,
        consumption: ceData1.ceConsumption,
    };
    // var data = JSON.stringify(`{\n      "energy": ${ceData1.ceEnergy},\n      "consumption": ${ceData1.ceConsumption}\n      }: ''`);

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://app.trycarbonapi.com/api/cleanHydro?energy=${ceData1.ceEnergy}&consumption=${ceData1.ceConsumption}`,
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNWQ3OWMwYjVmODdmODBkMDA1YTFjZWI4MWI1OGFlZThjN2ZlOTQ5NDIwYmFkODMxNGIxMDZmODRkNzdiZjBiMjY1YzZhZjI0NmRjMDFmYmQiLCJpYXQiOjE2ODAwNzQxMTgsIm5iZiI6MTY4MDA3NDExOCwiZXhwIjoxNzExNjk2NTE4LCJzdWIiOiI0MDY0Iiwic2NvcGVzIjpbXX0.cN3WCdheF7uezNVs8mQ4IFE0sQfEUBRNA6fkR8a2okkkqBAmr2XMZIBtFtdwi78-hRdzZcAjj_1uMZyb77LkSA',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };


    // useEffect(() => {
    //     console.log(ceData1);
    // }, [ceData1]);


    const ceSubmitData = async () => {
        console.log(`${ceData1.ceEnergy} ${ceData1.ceConsumption}`)
        // const ceResult2 = await console.log(ceResult);
        // console.log(ceResult2)
        await axios(config)
            .then(function (response) {
                const ceResult = JSON.stringify(response.data);
                // alert(`Carbon: ${ceResult}`);
                console.log(`Carbon: ${ceResult}`);
                const numbers = ceResult.match(/\d+(\.\d+)?/g);
                // console.log(numbers[0]);
                const demo = numbers[0];
                alert(demo)
                console.log(demo)

                // const value = ceResult
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
                    <label className='publicT-form__label'>Clean Energy</label>
                    <div className='formMain'>
                        <div className='form-group bottom35'>
                            <label className='publicT-form__label1'>Return the CO2e in Kg from the consumption of clean hydro energy.</label>
                        </div>
                        <div className='traditionalCountry-ip'>
                            <div className='form-group '>
                                <label className='publicT-form__label2 '>Consumption:</label>
                                <input className='form-control' type='text' placeholder='The amount of energy consumed in KWH.' required id='last_name' name='last_name' onChange={(e2) => {
                                    setCeData({ ...ceData1, ceConsumption: e2.target.value })
                                }} />
                            </div>
                        </div>
                        <div className='traditionalCountry-dd'>
                            <div className='form-group bottom35'>
                                <label className='publicT-form__label2'>The source of the clean energy.</label>

                                <div className="dropdown">
                                    <select className='form-control' id='pt-type' name='pt-type' onChange={(e2) => {
                                        setCeData({ ...ceData1, ceEnergy: e2.target.value })
                                    }}>
                                        <option value='Default'>Select</option>
                                        <option value='Solar'>Solar</option>
                                        <option value='Wind'>Wind</option>
                                        <option value='HydroElectric'>HydroElectric</option>
                                        <option value='Biomass'>Biomass</option>
                                        <option value='Geothermal'>Geothermal</option>
                                        <option value='Tidal'>Tidal</option>
                                        <option value='OtherCleanEnergy'>Other Clean Energy</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='pTbtn col-sm-12 mt-4'>
                            <button type='submit' className='publicT-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => ceSubmitData()}>
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CleanEnergyCalc