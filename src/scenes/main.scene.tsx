import * as React from "react";
import {AcademicPage, ContactPage, ExperiencePage, HomePage, KnowledgesPage, PDF} from "pods";
import * as classes from "./main.scene.scss";
import {Animation, Reveal} from "react-genie";
import {Divider, Icon, IconButton} from "rsuite";

export const MainScene = () => {

    return (
        <>
            <div className={classes.wrapper}>
                <HomePage/>
                <AcademicPage/>
                <Reveal animation={Animation.SlideInRight}>
                    <ExperiencePage/>
                </Reveal>

                <Reveal animation={Animation.FadeInUp}>
                    <KnowledgesPage/>
                </Reveal>

                <ContactPage/>

                <Reveal animation={Animation.FadeIn}>
                    <PDF/>
                </Reveal>

                <Divider>
                </Divider>
                <div style={{display: "flex", justifyContent: "flex-end", width: '90vw'}}><IconButton
                    icon={<Icon icon="chevron-up"/>}
                    color={"violet"}
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/></div>
            </div>
        </>
    );
}
