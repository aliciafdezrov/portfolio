import * as React from "react";
import {Media} from "react-md";
const backgroundImage = require("../../assets/ash-edmonds-510566-unsplash.jpg");

export interface IPropsHomePage {
}

export interface IDispatchPropsHomePage {

}

export interface IStateHomePage {

}

export class HomePage extends React.Component<IPropsHomePage & IDispatchPropsHomePage, IStateHomePage> {
    public constructor(props: IPropsHomePage & IDispatchPropsHomePage) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Media style={{margin: '0px'}}>
                    <div className="title-style">
                        <h1>Alicia Fernández Rovira</h1>
                        <h4>Desarrollador Full-Stack en Málaga</h4>
                    </div>

                    <img className="image-style" src={backgroundImage} alt="Laptop" />
                </Media>
            </div>
        );
    }
}