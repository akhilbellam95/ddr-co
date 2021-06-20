import React from 'react';
import './Contact.scss';

function Contact() {
    return <div className="box">
        <section id="details">
            <div className="contact-details">
                <h2>Corporate Office Address:</h2>
                {/* <p>DDR & Co,<br></br> Kurnool Rd, Venkateswara <br></br> Nagar, Ongole, <br></br> Andhra Pradesh 523002, India </p> */}
            </div>
            <div className="maps">
                <iframe title="akhil" className="maps-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.56194623261604!2d80.04344606059968!3d15.511542010791946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01a8692aa439%3A0xf269ef5bef4811f3!2sVijaya%20Complex!5e0!3m2!1sen!2sit!4v1594920246781!5m2!1sen!2sit" height="450" frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </section>

        <section className="row hover-effects">
            <div className="container col-lg-4">
                <div className="box">
                    <div className="imgBx">
                        <span className="material-icons">
                            phone
                            </span>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <span className="material-icons">
                                phone
                            </span>
                            <h3>Phone No.</h3>
                            <h4>+ 223 322 3323</h4>
                            <h4>+ 223 343 4535</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container col-lg-4">
                <div className="box">
                    <div className="imgBx">
                        <span className="material-icons">
                            email
                            </span>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <span className="material-icons">
                                email
                            </span>
                            <h3>Email</h3>
                            <h4>info@ddr.com</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container col-lg-4">
                <div className="box">
                    <div className="imgBx">
                        <span className="material-icons">
                            place
                            </span>
                        </div>
                        <div className="content">
                            <div className="icon">
                                <span className="material-icons">
                                    place
                                </span>
                                <h3>Address</h3>
                                <h4>Vijaya Complex</h4>
                                <h4>Ongole</h4>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default Contact;