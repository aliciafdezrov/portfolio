import * as React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {Animation} from "react-genie";
import * as classes from "./academic-section.component.styles";
import {AcademicInfo} from "../../academic.vm";
import {TimeLine} from "components";

const DEGREES_TITLE = "Estudios";
const PROJECTS_TITLE = "Proyectos Académicos";
const LANGUAGES_TITLE = "Idiomas";

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
                        <TimeLine title={DEGREES_TITLE} items={academicInfo.degrees} animationDelay={100}
                                  animationTransition={Animation.SlideInRight} isMobile={false}/>
                        <TimeLine title={PROJECTS_TITLE} items={academicInfo.projects} animationDelay={200}
                                  animationTransition={Animation.SlideInRight} isMobile={false}/>
                        <TimeLine title={LANGUAGES_TITLE} items={academicInfo.languages} animationDelay={200}
                                  animationTransition={Animation.SlideInRight} isMobile={false}/>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className={classes.container}>
                    <div className={classes.card}>
                        <TimeLine title={DEGREES_TITLE} items={academicInfo.degrees} animationDelay={100}
                                  animationTransition={Animation.SlideInRight} isMobile={true}/>
                        <TimeLine title={PROJECTS_TITLE} items={academicInfo.projects} animationDelay={200}
                                  animationTransition={Animation.SlideInRight} isMobile={true}/>
                        <TimeLine title={LANGUAGES_TITLE} items={academicInfo.languages} animationDelay={200}
                                  animationTransition={Animation.SlideInRight} isMobile={true}/>
                    </div>
                </div>
            </MobileView>
        </>
    )
};
