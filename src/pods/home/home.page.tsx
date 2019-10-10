import * as React from "react";
import * as classes from './home.scss';
import {Parallax} from 'react-parallax';
import {Animation, Reveal} from 'react-genie';

export const HomePage = () => {
    return (
        <>
            <Parallax strength={-200}
                      blur={10}
                      bgImage={require("../../../assets/ash-edmonds-510566-unsplash-min.webp")}
                      bgImageAlt="...">
                <div className={classes.card}>
                    <div className={classes.title}>
                        <Reveal animation={Animation.FadeIn}>
                            <div className={classes.titleText}>
                                Alicia Fernández Rovira
                            </div>
                        </Reveal>
                        <Reveal animation={Animation.FadeIn}>
                           <div className={classes.subtitleText}>
                            Desarrolladora Full-Stack en Málaga
                           </div>
                        </Reveal>
                    </div>
                </div>
            </Parallax>
        </>
    );
}