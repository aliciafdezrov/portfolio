import * as React from "react";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {BottomNavigation} from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
const file = require("../../docs/CV.pdf")

export interface IPropsDashboardPage {
    intl?: ReactIntl.InjectedIntl;
    currentRoute: number;
}

export interface IDispatchPropsDashboardPage {
    pushRouter: (id: number) => any;
}

export interface IStateDashboardPage {

}

export class DashboardPage extends React.Component<IPropsDashboardPage & IDispatchPropsDashboardPage & InjectedIntlProps, IStateDashboardPage> {
    public constructor(props: IPropsDashboardPage & IDispatchPropsDashboardPage & InjectedIntlProps) {
        super(props);
    }

    private handleChange (event, value) {
        this.props.pushRouter(value);
    }

    public render() {

        return (
            <div>
                <BottomNavigation
                    value={this.props.currentRoute}
                    onChange={this.handleChange.bind(this)}
                    showLabels>

                    <BottomNavigationAction label="Home"/>
                    <BottomNavigationAction label="Experiencia"/>
                    <BottomNavigationAction label="Conocimientos"/>
                    <BottomNavigationAction label="Sobre mi"/>
                    <BottomNavigationAction label="Descarga" href="CV.pdf" download/>
                </BottomNavigation>
            </div>
        );
    }
}