import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./Carrousel.scss";

class Carrousel extends Component {
    render() {
        return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={3000} className="image-box">
                <img
                    className="d-block w-100"
                    src="../images/main.jpg"
                    alt="First slide"
                />
                </Carousel.Item>
            </Carousel>
        </div>
        );
    }
}

export default Carrousel;
