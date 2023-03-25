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
            <div id="container" className="container-fluid px-4 px-md-5 pt-4">
                <div className='col-4'>
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src="../assets/logo/carboEx_Logo.png"
                            height="100px"
                            width="130px"

                            className="img-fluid d-inline-block align-top justify-content-between"
                            alt="" style={{ borderRadius: "50%" }}
                        />
                    </NavLink>
                </div>
                <div className='col-8 d-flex justify-content-between'>
                    <div className='col-2'></div>
                    <div className='col-3 quickLinks'>
                        <p className='linkHead'>Quick Links</p>
                        <ul>
                            {quickLink.map((item, index) => (
                                <QuickLinkLi body={item} key={index} />
                            ))}
                        </ul>

                    </div>
                    <div className='col-3 '>
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