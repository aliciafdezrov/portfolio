import * as React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import classes from "./academic-section.component.scss";
import {Animation} from "react-genie";
import {AcademicInfo} from "../../academic.vm";
import {TimeLine} from "components/time-section/timeline.component";

export interface Props {
    academicInfo: AcademicInfo;
}

export const AcademicSection = (props: Props) => {
    const {academicInfo} = props;
    return (
        <>
            <BrowserView>
                <div className={classes.container}>
                    <div className={classes.card}>
                        <TimeLine title={'Estudios'} items={academicInfo.degrees} animationDelay={100}
                                  animationTransition={Animation.SlideInRight} isMobile={false}/>
                        <TimeLine title={'Proyectos Académicos'} items={academicInfo.projects} animationDelay={200}
                                  animationTransition={Animation.SlideInRight} isMobile={false}/>
                        <TimeLine title={'Idiomas'} items={academicInfo.languages} animationDelay={200}
                                  animationTransition={Animation.SlideInRight} isMobile={false}/>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className={classes.container}>
                    <div className={classes.card}>
                        <TimeLine title={'Estudios'} items={academicInfo.degrees} animationDelay={100}
                                  animationTransition={Animation.SlideInRight} isMobile={true}/>
                        <TimeLine title={'Proyectos Académicos'} items={academicInfo.projects} animationDelay={200}
                                  animationTransition={Animation.SlideInRight} isMobile={true}/>
                        <TimeLine title={'Idiomas'} items={academicInfo.languages} animationDelay={200}
                                  animationTransition={Animation.SlideInRight} isMobile={true}/>
                    </div>
                </div>
            </MobileView>
        </>
    )
};
