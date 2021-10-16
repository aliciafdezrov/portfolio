import * as React from "react";
import {useState} from "react";
import {AcademicPage, ContactPage, ExperiencePage, HomePage, KnowledgesPage, PDF} from "pods";
import classes from "./main.scene.scss";
import {Animation, Reveal} from "react-genie";
import {Divider, IconButton} from "rsuite";
import ArrowUpLineIcon from '@rsuite/icons/ArrowUpLine';

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
                        aria-label="scroll-to-top"
                        icon={<ArrowUpLineIcon/>}
                        color={"violet"}
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>
                </Divider>
            </div>
        </>
    );
}
