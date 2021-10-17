import * as React from "react";
import classes from './home.scss';
import {Animation, Reveal} from 'react-genie';
import {CenteredLayout} from "layout/centered.layout";

const bgImgSource = require("../../../assets/ash-edmonds-510566-unsplash-min.webp");

export const HomePage = () => (
    <CenteredLayout>
        <img className={classes.image} alt="beautiful-background-image"
             src={bgImgSource}
             width={window.innerWidth}
             height={window.innerHeight}/>
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
