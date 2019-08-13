import * as React from "react";
import {Media} from "react-md";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;

const backgroundImage = require("../../docs/ash-edmonds-510566-unsplash.jpg")
export interface IPropsHomePage {
    intl?: ReactIntl.InjectedIntl;
}

export interface IDispatchPropsHomePage {

}

export interface IStateHomePage {

}

export class HomePage extends React.Component<IPropsHomePage & IDispatchPropsHomePage & InjectedIntlProps, IStateHomePage> {
    public constructor(props: IPropsHomePage & IDispatchPropsHomePage & InjectedIntlProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Media>
                    <div className="title-style">
                        <h1>Alicia Fernández Rovira</h1>
                        <h4>Full-Stack Developer on Málaga</h4>
                    </div>

                    <img className="image-style" height={'80vh'} src={backgroundImage} alt="Laptop" />
                </Media>
            </div>
        );
    }
}