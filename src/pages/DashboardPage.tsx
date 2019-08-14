import * as React from "react";
import {FontIcon} from "react-md";
import {HomePage} from "./HomePage";
import {ExperiencePage} from "./ExperiencePage";
import {KnowledgePage} from "./KnowledgesPage";
import {AcademicPage} from "./AcademicPage";
import {ContactPage} from "./ContactPage";
import {BottomNavigation} from "react-md/lib/BottomNavigations";
import {MyDocument} from "../components/MyDocument";
import { BrowserView, MobileView } from 'react-device-detect';
import Button from "react-md/lib/Buttons";
const cv = require('../../docs/CV.pdf');

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
    <ContactPage key="contact"/>,
    <div>
        <BrowserView>
            <MyDocument key="cv"/>
        </BrowserView>
        <MobileView>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: '100vh', width:'100vw'}}>
                <Button primary raised href={cv} download>
                    ¡Pulsa para descargar!
                </Button>
            </div>
        </MobileView>
    </div>
];
const themes = ['home', 'academic', 'experience', 'knowledge', 'contact', 'cv'];

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
            <div className="wrapper">
                {
                    components[this.state.activeIndex]
                }
                <div className={`bottom-navigations__dynamic--${themes[this.state.activeIndex]}`}>
                    <div className="dashboard-section">
                        <BottomNavigation
                            dynamic
                            links={links}
                            colored
                            activeIndex={this.state.activeIndex}
                            onNavChange={(activeIndex) => this.setState({activeIndex: activeIndex})}
                        />
                    </div>
                </div>
            </div>
        );
    }
}