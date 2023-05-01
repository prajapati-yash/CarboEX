import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/footer/Footer.css'

const quickLink = [
    {
        title: "Calculator",
        link: "#"
    },
    {
        title: "About Us",
        link: "#"
    },
    {
        title: "Terms & Conditions",
        link: "#"
    },
    {
        title: "Privacy Policy",
        link: "#"
    },
]


const socialLinks = [

    {
        title: "fa-facebook",
        link: "#",
    },
    {
        title: "fa-twitter",
        link: "#",
    },
    {
        title: "fa-instagram",
        link: "#",
    },
]


function Footer() {
    return (
        <div>
            <div id="container" className="container-fluid px-4 px-md-5 pt-4 flex-column flex-md-row">
                <div className='col-3 col-md-4'>
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src="../../assets/logo/carboEx_Logo.png"
                            height="100px"
                            width="130px"
                            className="img-fluid d-inline-block align-top justify-content-between"
                            alt="" style={{ borderRadius: "50%" }}
                        />
                    </NavLink>
                </div>
                <div className='col-9 col-md-8 d-flex flex-md-row justify-content-between foot-links mb-4'>
                    <div className=' col-lg-2'></div>
                    <div className='col-4 col-md-4 col-lg-3 quickLinks'>
                        <p className='linkHead'>Quick Links</p>
                        <ul>
                            {quickLink.map((item, index) => (
                                <QuickLinkLi body={item} key={index} />
                            ))}
                        </ul>

                    </div>
                    <div className='col-5 col-md-4 col-lg-3 social-media '>
                        <p className='linkHead'>Get in Touch</p>
                        <div>
                            {socialLinks.map((item, index) => (
                                <SocialMediaLi body={item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function QuickLinkLi({ body }) {
    return (
        <li className='footLinkLi'>
            <a className='footLink' href={body.link}>{body.title}</a>
        </li>
    )
}

function SocialMediaLi({ body }) {
    const classes = `fa-brands ${body.title} fa-2x pe-2`;
    return (
        <>
            <a href={body.link} className='icon-link'>
                <i className={classes} aria-hidden="true"></i>
            </a>
        </>
    )
}

export default Footer