import * as React from "react";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {BottomNavigation} from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
const file = require("../../docs/CV.pdf")

export interface IPropsHomePage {
    intl?: ReactIntl.InjectedIntl;
    currentRoute: number;
}

export interface IDispatchPropsHomePage {
    pushRouter: (id: number) => any;
}

export interface IStateHomePage {

}

export class HomePage extends React.Component<IPropsHomePage & IDispatchPropsHomePage & InjectedIntlProps, IStateHomePage> {
    public constructor(props: IPropsHomePage & IDispatchPropsHomePage & InjectedIntlProps) {
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