import React from 'react'
import '../../styles/contact/ContactForm.css';

function ContactHero() {
    return (
        <div className='container-fluid'>
            <div className='contactHero'>
                <div className='contactHeroImg '>
                    <div className="contactHeroTagline">
                        <h1>To know more about our project or participate in Carbon trading, fill out the form and send us your query!</h1>
                    </div>
                </div>
            </div>
        </div>
        // <div className='container-fluid px-4 px-md-5'>
        //     <div className='contactHero mx-auto'>
        //         {/* <div className="text-center position-absolute top-50 start-50 translate-middle"> */}
        //         <div className="contactHeroTagline">
        //             <h1>To know more about our project or participate in Carbon trading, fill out the form and send us your query!</h1>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ContactHero