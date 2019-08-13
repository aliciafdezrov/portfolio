import * as React from "react";
import {Media} from "react-md";
const backgroundImage = require("../../docs/ash-edmonds-510566-unsplash.jpg");

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
                <Media>
                    <div className="title-style">
                        <h1>PRUEEEEBAAA</h1>
                        {/*<h1>Alicia Fernández Rovira</h1>
                        <h4>Full-Stack Developer on Málaga</h4>*/}
                    </div>

                    <img className="image-style" height={'80vh'} src={backgroundImage} alt="Laptop" />
                </Media>
            </div>
        );
    }
}