import * as React from "react";
import {Media} from "react-md";
import MediaOverlay from "react-md/lib/Media/MediaOverlay";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
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
                <div className="row">
                <Media>
                    <MediaOverlay>
                        <CardTitle className="title-style" title="John Doe" />
                    </MediaOverlay>
                    <img className="image-style" src={backgroundImage} alt="Working...s" />
                </Media>
                </div>
            </div>
        );
    }
}