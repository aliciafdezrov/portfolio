import * as React from "react";
import {AcademicPage, ContactPage, ExperiencePage, HomePage, KnowledgesPage, PDF} from "pods";
import * as classes from "./main.scene.scss";

export const MainScene = () => {

    return (
        <>
            <div className={classes.wrapper}>
                <HomePage/>
                <AcademicPage/>
                <ExperiencePage/>
                <KnowledgesPage/>
                <ContactPage/>
                <PDF/>
            </div>
        </>
    );
}