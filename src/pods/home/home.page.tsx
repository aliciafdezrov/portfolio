import * as React from "react";
import classes from './home.scss';
import {Animation, Reveal} from 'react-genie';
import {CenteredLayout} from "../../layout/centered.layout";

export const HomePage = () => (
    <CenteredLayout>
        <div className={classes.content}>
            <Reveal animation={Animation.FadeIn}>
                <div className={classes.title}>
                    Alicia Fernández Rovira
                </div>
            </Reveal>
            <Reveal animation={Animation.FadeIn}>
                <div className={classes.subtitle}>
                    Desarrolladora Full-Stack en Málaga
                </div>
            </Reveal>
        </div>
    </CenteredLayout>
);
