import * as React from "react";
import {AcademicPage, ContactPage, ExperiencePage, HomePage, KnowledgesPage, PDF} from "pods";
import * as classes from "./main.scene.scss";
import {Reveal, Animation} from "react-genie";
import {Divider, Icon, IconButton} from "rsuite";

export const MainScene = () => {

    return (
        <>
            <div className={classes.wrapper}>
                <HomePage/>
                <Reveal animation={Animation.SlideInLeft}>
                    <AcademicPage/>
                </Reveal>

                <Reveal animation={Animation.SlideInRight}>
                    <ExperiencePage/>
                </Reveal>

                <Reveal animation={Animation.FadeInUp}>
                    <KnowledgesPage/>
                </Reveal>

                <Reveal animation={Animation.SlideInLeft}>
                    <ContactPage/>
                </Reveal>

                <Reveal animation={Animation.FadeIn}>
                    <PDF/>
                </Reveal>

                <Divider><IconButton icon={<Icon icon="chevron-up"/>}
                                     color={"violet"}
                                     onClick={() => window.scrollTo(0, 0)}/></Divider>
            </div>
        </>
    );
}