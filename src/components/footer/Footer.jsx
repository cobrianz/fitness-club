import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className="footer__container">
            <hr />
            <div className="footer">
                <div className="social__links">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="logo__footer">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blur__footer-1"></div>
            <div className="blur blur__footer-2"></div>
        </div>
    )
}

export default Footer