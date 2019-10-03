import * as React from "react";
import {Media} from "react-md";
const backgroundImage = require("../../assets/ash-edmonds-510566-unsplash.jpg");

export const HomePage = () => {
    return (
        <div>
            <Media style={{margin: '0px'}}>
                <div className="title-style">
                    <h1>Alicia Fernández Rovira</h1>
                    <h4>Desarrolladora Full-Stack en Málaga</h4>
                </div>

                <img className="image-style" src={backgroundImage} alt="Laptop"/>
            </Media>
        </div>
    );
}