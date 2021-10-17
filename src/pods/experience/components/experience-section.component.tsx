import * as React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import classes from "./experience-section.component.scss";
import {Animation} from "react-genie";
import {TimeLine} from "components/time-section/timeline.component";
import {ExperienceInfo} from "../experience.vm";

export interface Props {
    experienceInfo: ExperienceInfo;
}

export const ExperienceSection = (props: Props) => {
    const {experienceInfo} = props;
    return (
        <>
            <BrowserView>
                <div className={classes.container}>
                    <div className={classes.card}>
                        <TimeLine title={'Experiencia profesional'} items={experienceInfo.jobs} animationDelay={100}
                                  animationTransition={Animation.SlideInRight} isMobile={false}/>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className={classes.container}>
                    <div className={classes.card}>
                        <TimeLine title={'Estudios'} items={experienceInfo.jobs} animationDelay={100}
                                  animationTransition={Animation.SlideInRight} isMobile={true}/>
                    </div>
                </div>
            </MobileView>
        </>
    )
};
