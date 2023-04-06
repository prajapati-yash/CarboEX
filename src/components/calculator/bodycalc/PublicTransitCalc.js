import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import axios from 'axios'
import { useState } from 'react'

function PublicTransitCalc({ onValueChange, props }) {

    const [ptData1, setPtData] = useState({
        ptDistance: null,
        ptType: null
    })

    var data = {
        distance: ptData1.ptDistance,
        type: ptData1.ptType,
    };
    // var data = JSON.stringify(`{\n      "distance": ${ptData1.ptDistance},\n      "type": ${ptData1.ptType}\n      }: ''`);
    const apiKey = process.env.REACT_APP_API_BEARER_TOKEN;
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://app.trycarbonapi.com/api/publicTransit?distance=${ptData1.ptDistance}&type=${ptData1.ptType}`,
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };


    // useEffect(() => {
    //     console.log(ptData1);
    // }, [ptData1]);


    const ptSubmitData = async () => {
        // console.log(`${ptData1.ptDistance} ${ptData1.ptType}`)
        // const ptResult2 = await console.log(ptResult);
        // console.log(ptResult2)
        await axios(config)
            .then(function (response) {
                const ptResult = JSON.stringify(response.data.carbon);
                // alert(`Carbon: ${ptResult}`);
                // console.log(`Carbon: ${ptResult}`);
                const numbers = ptResult.match(/\d+(\.\d+)?/g);
                // console.log(numbers[0]);
                const demo = numbers[0];
                alert(demo)
                console.log(demo)

                // const value = ptResult
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
                    <label className='publicT-form__label'>Public Transit</label>
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
                        <div className='pTbtn col-sm-12 mt-4'>
                            <button type='submit' className='publicT-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => ptSubmitData()}>
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PublicTransitCalc