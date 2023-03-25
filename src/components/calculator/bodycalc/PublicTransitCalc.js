import React from 'react'
import '../../../styles/calculator/bodycalc/PublicTransitCalc.css'
import HeadCalculator from '../headcalc/HeadCalculator'
import axios from 'axios'
import { useState, useEffect } from 'react'

function PublicTransitCalc() {

    const [ptData1, setPtData] = useState({
        ptDistance: null,
        ptType: null
    })

    var data = JSON.stringify(`{\n      "distance": ${ptData1.ptDistance},\n      "type": ${ptData1.ptType}\n      }: ''`);

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://app.trycarbonapi.com/api/publicTransit?distance=${ptData1.ptDistance}&type=${ptData1.ptType}`,
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOTA4YmE1N2ZmNjRjYmNhNDY1MmYyOTYzNjA2M2E4NGIwOGYzOWFmMzVjN2JmYTM1Y2I5ZDEyMTQ3OGJmMGViZWVlNGRkYmZiMDVmODhmOTAiLCJpYXQiOjE2Nzk3MzczNzEsIm5iZiI6MTY3OTczNzM3MSwiZXhwIjoxNzExMzU5NzcwLCJzdWIiOiIzOTY0Iiwic2NvcGVzIjpbXX0.Vn12tpEaDhpfugkySvV041zw-XU1ficc_GKyiWyoIEYaB_5FY1QnzBekbayM9ymANMC1aOKOSXyFKbUukgzIeg',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'XSRF-TOKEN=eyJpdiI6InVBV0FLeGM5ZTZqQkh3L1o4Z2JuQXc9PSIsInZhbHVlIjoiQ0pKZXFGRktNWHdUOHVhMVF1ZzArWWNwTGhRZ1cvS0cwZ0N5SXVISGdJUGZWSHFycnBjOEFpVDM3OWJaY0l5Zmsyek1jMnRwMEk2TUhtVFpmUS9ZQ1Y1MWo5UXpXem92SURhT0FLRkVPTUJxWWJEWUZWRTNrNkJiNCszYytQN3QiLCJtYWMiOiIxMzc2MzMyODZkNDFhYWE5M2Q3YmE4MWU5MDM1ZDdlZWMyNjc4OTY3OWE1NzMzODgzZTY5NjZlOGNiNmJkNDc5In0%3D; trycarbonapi_session=eyJpdiI6IkZqV2pub2tnWE43M3VEZzVTYmZjT1E9PSIsInZhbHVlIjoiV0xrWjA4T2RiSzZIRlhVek9UYnQ3TGtQTHhvYkc5VGx6aFdhRDhwZWVHbXNtY2tRdXYyd3ZsVTR4YnU4djZFQTkxNzJ0U0p5MGdIN3pXakhMSWM0eUVRTm9zcS9WTHVZZWFZc25ocUVhWjBhSVBKRzVzcFNjQm1IRmk5SnI1UFQiLCJtYWMiOiI0ODFhMzE5YmMwMjU4MDI5Mzk5NDk0OGZhZWI3OWU3NTBiMTkyMDYwNGQ3NGFjMjE2YWE5ZGU5N2EwNGI4M2M4In0%3D'
        },
        data: data
    };

    // axios(config)
    //     .then(function (response) {

    //         console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });


    // useEffect(() => {
    //     console.log(ptData1);
    // }, [ptData1]);

    const ptSubmitData = async () => {
        console.log(`${ptData1.ptDistance} ${ptData1.ptType}`)
        await axios(config)
            .then(function (response) {
                const ptResult = JSON.stringify(response.data.carbon);
                console.log(ptResult);
                const numbers = ptResult.match(/\d+(\.\d+)?/g);
                console.log(numbers[0]);
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
                                        <option value='Classic-Bus'>Classic Bus</option>
                                        <option value='EcoBus'>EcoBus</option>
                                        <option value='Coach'>Coach</option>
                                        <option value='National-Train'>National Train</option>
                                        <option value='Light-Rail'>Light Rail</option>
                                        <option value='Subway'>Subway</option>
                                        <option value='FerryOnFoot'>FerryOnFoot</option>
                                        <option value='FerryOnCar'>FerryOnCar</option>
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