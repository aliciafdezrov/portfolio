import * as React from "react";
import {Media} from "react-md";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;

const backgroundImage = require("../../docs/ash-edmonds-510566-unsplash.jpg")
export interface IPropsDashboardPage {
    intl?: ReactIntl.InjectedIntl;
}

export interface IDispatchPropsDashboardPage {

}

export interface IStateDashboardPage {

}

export class DashboardPage extends React.Component<IPropsDashboardPage & IDispatchPropsDashboardPage & InjectedIntlProps, IStateDashboardPage> {
    public constructor(props: IPropsDashboardPage & IDispatchPropsDashboardPage & InjectedIntlProps) {
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