import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
    render() {
        return (
        <div className="footer">
            <div className="address">
                <p>DDR & Co,<br></br> Kurnool Rd, Venkateswara <br></br> Nagar, Ongole, <br></br> Andhra Pradesh 523002, India </p>
                <h6>Trademark of DDR-Co <sup>®</sup>, Ongole.</h6>
            </div>
            <div className="social-media"></div>
        </div>
        );
    }
}

export default Footer;
