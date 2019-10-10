import * as React from "react";
import {AcademicPage, ContactPage, ExperiencePage, HomePage, KnowledgesPage, PDF} from "pods";
import * as classes from "./main.scene.scss";
import {Animation, Reveal} from "react-genie";
import {Divider, Icon, IconButton} from "rsuite";
import {useState} from "react";

export const MainScene = () => {
    const [showDialog, setShowDialog] = useState(false);

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

                <Reveal animation={Animation.FadeIn} onShowDone={() => setShowDialog(true)}>
                    <PDF showDialog={showDialog}/>
                </Reveal>

                <Divider>
                    <IconButton
                        name="scroll-to-top"
                        label="scroll-to-top"
                        icon={<Icon icon="chevron-up"/>}
                        color={"violet"}
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>
                </Divider>
            </div>
        </>
    );
}
