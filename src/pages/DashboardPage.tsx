import * as React from "react";
import {FontIcon} from "react-md";
import {HomePage} from "./HomePage";
import {ExperiencePage} from "./ExperiencePage";
import {KnowledgePage} from "./KnowledgesPage";
import {AcademicPage} from "./AcademicPage";
import {ContactPage} from "./ContactPage";
import {BottomNavigation} from "react-md/lib/BottomNavigations";
const file = require("../../docs/CV.pdf");

export interface IPropsDashboardPage {
}

export interface IDispatchPropsDashboardPage {
}

export interface IStateDashboardPage {

}

const components = [HomePage, ExperiencePage, KnowledgePage, AcademicPage, ContactPage];

export class DashboardPage extends React.Component<IPropsDashboardPage & IDispatchPropsDashboardPage, IStateDashboardPage> {
    public constructor(props: IPropsDashboardPage & IDispatchPropsDashboardPage) {
        super(props);
    }

    state = {
        activeIndex: 1,
    };

    public render() {
        let links = [{
            label: 'Home',
            icon: <FontIcon>access_time</FontIcon>,
        }, {
            label: 'Experiencia',
            icon: <FontIcon>favorite</FontIcon>,
        }, {
            label: 'Tecnologías',
            icon: <FontIcon>place</FontIcon>,
        }, {
            label: 'Sobre mi',
            icon: <FontIcon>place</FontIcon>,
        }, {
            label: 'Descarga',
            icon: <FontIcon>place</FontIcon>,
        }];
        return (
            <div>

                {
                    components[this.state.activeIndex+1]
                }

                <BottomNavigation
                    dynamic
                    links={links}
                    colored
                    activeIndex={this.state.activeIndex}
                    onNavChange={(activeIndex) => this.setState({activeIndex: activeIndex})}
                />
            </div>
        );
    }
}