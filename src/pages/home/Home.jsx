// import { Carousel } from 'bootstrap';
import React from 'react';
import './Home.scss';
// import Carrousel from '../../components/carrousel/Carrousel';


function Home() {
    return <div>
        <img
            className="d-block w-100"
            src="../images/main.jpg"
            alt="First slide"
        />
        
        <div className="area1 row">
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-lg-4 col-lg-4 col-sm-12">
                <img className="image1 card-img" src="../images/line.jpg" alt="money" />
                </div>
                <div className="col-lg-8">
                <div className="card-body">
                    <h5 className="card-title">LINE OF ACTIVITY OF DDR & COMPANY</h5>
                    <p className="card-text">The Company has been specializing in all kinds of civil works involved in the Formation of Roads, Widening of Roads, Strengthening of Roads, Maintenance of roads of National Highways Authority of India and Special Repair works under renewal program, with Hot Mix Process. Further, the Company also executed Construction of Major Culverts, Buildings and Formation of Storage Tanks and erection of Electrical Sub stations by deploying sophisticated Plant and heavy Machineries.
                        At present, Andhra Pradesh, Telengana, Karnataka, Uttar Pradesh, Madhya Pradesh & Gujurat; we propose to move to other areas too as required.</p>
                </div>
                </div>
            </div>
            
        </div>
        </div>
        <div className="area2">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">SHARE CAPITAL OF DDR & COMPANY</h5>
                        <p className="card-text">DDR & Co., have six directors as per Company Law. The Authorised share capital of the company is Rs. 15 crores. As on date the company has a paid up share capital of Rs.10.02 Crores from the directors of the company. The company was established on a day to day service which is jointly controlled and who costs, risks, benefits are equally shared among the members, equity, social justice and self helpers are major concern of this company.</p>
                    </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                    <img className="image2 card-img" src="../images/rupee.jpg" alt="money" />
                    </div>
                </div>
            </div>
        </div>
        <div className="area3 row">
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-lg-4 col-lg-4 col-sm-12">
                <img className="image3" src="../images/engineering.jpg" alt="money" />
                </div>
                <div className="col-lg-8">
                <div className="card-body">
                    <h5 className="card-title">ENGINEERING & DESIGN CAPABILITIES OF DDR & COMPANY</h5>
                    <p className="card-text">The Engineering and design capabilities are our time tested strength in executing turnkey projects. The Company’s competence and extensive experience in all the sectors of infrastructure industry are exemplary.
                        
                    </p>
                    <ul>
                        <li>Strong in-house Design capabilities</li>
                        <li>Up-to-the-minute Technologies</li>
                        <li>In-house Design center</li>
                        <li>Smart Plant P& ID</li>
                        <li>Softeck Estimate</li>
                        <li>LOOPS</li>
                        <li>AUTOCAD</li>
                        <li>MS Projects</li>
                    </ul>
                </div>
                </div>
            </div>
            
        </div>
        </div>
    </div>;
}

export default Home;