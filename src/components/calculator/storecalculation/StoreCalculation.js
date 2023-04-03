import '../../../styles/calculator/storecalculation/StoreCalculation.css'
import TraditionalBodyCalc from '../bodycalc/TraditionalBodyCalc'
import PublicTransitCalc from '../bodycalc/PublicTransitCalc'
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import React, { useEffect, useState } from 'react'
import ResultCalculation from './ResultCalculation'; // import the Modal component

// import React, { useEffect, useState } from 'react';
// import Modal from './Modal'; // import your Modal component


function StoreCalculation({ values }) {
    const [sum, setSum] = useState(0);
    const [showModal, setShowModal] = useState(false); // add state to control the visibility of the modal
    let newSum;
    const [latestValues, setLatestValues] = useState({});
    useEffect(() => {
        const updatedValues = { ...latestValues };
        let updatedFlag = false;
        Object.keys(values).forEach((component) => {
            const value = values[component];
            if (value !== latestValues[component]) {
                updatedFlag = true;
                updatedValues[component] = value;
            }
        });
        if (updatedFlag) {
            setLatestValues(updatedValues);
        }
    }, [values, latestValues]);


    const calculateSum = async () => {
        newSum = await Object.values(latestValues).reduce(
            (accumulator, currentValue) => accumulator + Number(currentValue),
            0
        );
        setSum(newSum);
        console.log(latestValues)

        console.log(newSum)
        // alert()
        setShowModal(true); // show the modal when the sum is calculated
    };

    return (
        <>
            <div className='storeCalc'>
                <ul>
                    {/* <div>Sum value: {sum}</div> */}
                    <button className='storeCalcBtn' onClick={calculateSum} >Result</button>
                </ul>
            </div>
            {showModal && <ResultCalculation sum={sum} onClose={() => setShowModal(false)} />}
        </>
    )
}

export default StoreCalculation;
// export default React.memo(StoreCalculation);














// function StoreCalculation({ values }) {
//     const [sum, setSum] = useState(0);
//     const [latestValues, setLatestValues] = useState({});
//     const [showModal, setShowModal] = useState(false); // state variable to control modal visibility

//     useEffect(() => {
//         const updatedValues = { ...latestValues };
//         let updatedFlag = false;
//         Object.keys(values).forEach((component) => {
//             const value = values[component];
//             if (value !== latestValues[component]) {
//                 updatedFlag = true;
//                 updatedValues[component] = value;
//             }
//         });
//         if (updatedFlag) {
//             setLatestValues(updatedValues);
//         }
//     }, [values, latestValues]);

//     const calculateSum = async () => {
//         const newSum = await Object.values(latestValues).reduce(
//             (accumulator, currentValue) => accumulator + Number(currentValue),
//             0
//         );
//         setSum(newSum);
//         setShowModal(true); // show modal when calculation is done
//     };

//     // function to handle buy/sell button click inside the modal
//     const handleModalButtonClick = () => {
//         setShowModal(false); // hide the modal
//         // add your buy/sell logic here based on the sum value
//     };

//     return (
//         <>
//             <div className='storeCalc'>
//                 <ul>
//                     <div>Sum value: {sum}</div>
//                     <button className='storeCalcBtn' onClick={calculateSum}>
//                         Result
//                     </button>
//                 </ul>
//             </div>
//             {/* render the modal based on the showModal state */}
//             {showModal && (
//                 <ResultCalculation>
//                     {sum > 100 ? (
//                         <button onClick={handleModalButtonClick}>Buy</button>
//                     ) : sum < 50 ? (
//                         <button onClick={handleModalButtonClick}>Sell</button>
//                     ) : (
//                         <div>Please calculate your emission first.</div>
//                     )}
//                     <div>Sum value: {sum}</div>
//                 </ResultCalculation>
//             )}
//         </>
//     );
// }

// export default React.memo(StoreCalculation);


















// function StoreCalculation({ values }) {

//     const [sum, setSum] = useState(0);
//     const [showModal, setShowModal] = useState(false); // add state to control the visibility of the modal

//     const [latestValues, setLatestValues] = useState({});
//     useEffect(() => {
//         const updatedValues = { ...latestValues };
//         let updatedFlag = false;
//         Object.keys(values).forEach((component) => {
//             const value = values[component];
//             if (value !== latestValues[component]) {
//                 updatedFlag = true;
//                 updatedValues[component] = value;
//             }
//         });
//         if (updatedFlag) {
//             setLatestValues(updatedValues);
//         }
//     }, [values, latestValues]);


//     const calculateSum = async () => {
//         const newSum = await Object.values(latestValues).reduce(
//             (accumulator, currentValue) => accumulator + Number(currentValue),
//             0
//         );
//         setSum(newSum);
//         setShowModal(false); // show the modal when the sum is calculated
//     };

//     return (
//         <>
//             <div className='storeCalc'>
//                 <ul>
//                     <div>Sum value: {sum}</div>
//                     <button className='storeCalcBtn' onClick={calculateSum} >Result</button>
//                 </ul>
//             </div>
//             {showModal && <ResultCalculation sum={sum} onClose={() => setShowModal(true)} />}
//         </>
//     )
// }

// export default React.memo(StoreCalculation);
// export default StoreCalculation
