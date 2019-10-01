import * as React from "react";
import {Paper} from "react-md";
import {ProgressComponent} from "../components/ProgressComponent";
import Divider from "react-md/lib/Dividers";
import {TechnologyRow} from "../components/TechnologyRow";

export class KnowledgePage extends React.Component<{}, {}> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className="central-div">
                <Paper className="title-paper" zDepth={2}>
                    <div className="knowledges-title">
                        <h4>Tecnologías y herramientas</h4>
                        <Divider/>
                    </div>
                    <div className="blocks-container">
                        <div>
                            <h3>MERN Stack</h3>
                            <TechnologyRow percent={90} label="React"/>
                            <TechnologyRow percent={80} label="Redux"/>
                            <TechnologyRow percent={75} label="Webpack"/>
                            <TechnologyRow percent={80} label="NodeJS"/>
                            <TechnologyRow percent={90} label="Jest"/>
                            <TechnologyRow percent={90} label="ES6"/>
                            <TechnologyRow percent={75} label="Express"/>
                            <TechnologyRow percent={75} label="Nginx"/>
                        </div>

                        <div>
                            <h3>J2EE Stack</h3>
                            <TechnologyRow percent={95} label="J2EE"/>
                            <TechnologyRow percent={95} label="Java"/>
                            <TechnologyRow percent={80} label="JUnit"/>
                            <TechnologyRow percent={80} label="Mockito"/>
                            <TechnologyRow percent={90} label="Maven"/>
                            <TechnologyRow percent={90} label="Wildfly"/>
                        </div>

                        <div>
                            <h3>Devops</h3>
                            <TechnologyRow percent={80} label="Docker"/>
                            <TechnologyRow percent={80} label="Docker Compose"/>
                            <TechnologyRow percent={80} label="Docker Swarm"/>
                            <TechnologyRow percent={80} label="Jenkins"/>
                        </div>

                        <div>
                            <h3>Otros</h3>
                            <TechnologyRow percent={45} label="GraphQL"/>
                            <TechnologyRow percent={95} label="RestFull"/>
                            <TechnologyRow percent={100} label="Git"/>
                            <TechnologyRow percent={90} label="MySQL"/>
                            <TechnologyRow percent={70} label="Oracle"/>
                            <TechnologyRow percent={90} label="MongoDB"/>
                            <TechnologyRow percent={90} label="Clean Code"/>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}