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

const components = [
    <HomePage key="home"/>,
    <AcademicPage key="academic"/>,
    <ExperiencePage key="experience"/>,
    <KnowledgePage key="knowledge"/>,
    <ContactPage  key="contact"/>
    ];
const themes = ['home', 'academic', 'experience', 'knowledge', 'contact'];

export class DashboardPage extends React.Component<IPropsDashboardPage & IDispatchPropsDashboardPage, IStateDashboardPage> {
    public constructor(props: IPropsDashboardPage & IDispatchPropsDashboardPage) {
        super(props);
    }

    state = {
        activeIndex: 0,
    };

    public render() {
        let links = [{
            label: 'Home',
            icon: <FontIcon>home</FontIcon>,
        }, {
            label: 'Académico',
            icon: <FontIcon>school</FontIcon>,
        }, {
            label: 'Experiencia',
            icon: <FontIcon>laptop</FontIcon>,
        }, {
            label: 'Tecnologías',
            icon: <FontIcon>star_border</FontIcon>,
        }, {
            label: 'Sobre mi',
            icon: <FontIcon>person_outline</FontIcon>,
        }, {
            label: 'Descarga',
            icon: <FontIcon>cloud_download</FontIcon>,
        }];
        return (
            <div className={`bottom-navigations__dynamic--${themes[this.state.activeIndex]}`}>

                {
                    components[this.state.activeIndex]
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