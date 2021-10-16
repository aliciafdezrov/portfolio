import * as React from "react";
import {TechnologyRow} from "components";
import {Divider} from "rsuite";
import classes from "./knowledges.scss";
import {Animation, Reveal} from "react-genie";

export const KnowledgesPage = () => (
    <div className={classes.container}>
        <div className={classes.card}>
            <h4>Tecnologías y herramientas</h4>
            <Divider/>

            <div className={classes.blocksContainer}>
                <Reveal delay={100} animation={Animation.FadeInUp}>
                    <div>
                        <h3>MERN Stack</h3>
                        <TechnologyRow percent={90} label="React"/>
                        <TechnologyRow percent={80} label="Redux"/>
                        <TechnologyRow percent={75} label="Webpack"/>
                        <TechnologyRow percent={80} label="NodeJS"/>
                        <TechnologyRow percent={90} label="Jest"/>
                        <TechnologyRow percent={90} label="ES9"/>
                        <TechnologyRow percent={75} label="Express"/>
                        <TechnologyRow percent={75} label="Nginx"/>
                    </div>
                </Reveal>

                <Reveal delay={200} animation={Animation.FadeInUp}>
                    <div>
                        <h3>J2EE Stack</h3>
                        <TechnologyRow percent={95} label="J2EE"/>
                        <TechnologyRow percent={95} label="Java"/>
                        <TechnologyRow percent={80} label="JUnit"/>
                        <TechnologyRow percent={80} label="Mockito"/>
                        <TechnologyRow percent={90} label="Maven"/>
                        <TechnologyRow percent={90} label="Wildfly"/>
                    </div>
                </Reveal>

                <Reveal delay={300} animation={Animation.FadeInUp}>
                    <div>
                        <h3>Devops</h3>
                        <TechnologyRow percent={80} label="Docker"/>
                        <TechnologyRow percent={80} label="Docker Compose"/>
                        <TechnologyRow percent={80} label="Docker Swarm"/>
                        <TechnologyRow percent={80} label="Jenkins"/>
                    </div>
                </Reveal>

                <Reveal delay={400} animation={Animation.FadeInUp}>
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
                </Reveal>
            </div>
        </div>
    </div>
);
