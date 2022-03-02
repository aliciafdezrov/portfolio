import * as React from "react";
import {Animation, Reveal} from "react-genie";
import Divider from "rsuite/Divider";
import "rsuite/Divider/styles/index.less";
import {TechnologyRow} from "components";
import classes from "./skills.scss";

export const SkillsPage = () => (
    <div className={classes.container}>
        <div className={classes.card}>
            <h4>Main Skills</h4>
            <Divider/>

            <div className={classes.blocksContainer}>
                <Reveal delay={100} animation={Animation.FadeInUp}>
                    <div>
                        <TechnologyRow percent={90} label="React"/>
                        <TechnologyRow percent={80} label="Redux"/>
                        <TechnologyRow percent={75} label="Webpack"/>
                        <TechnologyRow percent={80} label="Cypress"/>
                        <TechnologyRow percent={90} label="Jest"/>
                        <TechnologyRow percent={90} label="ES9"/>
                    </div>
                </Reveal>
            </div>
        </div>
    </div>
);
