import * as React from "react";
import {useState} from "react";
import {AcademicPage, ContactPage, ExperiencePage, HomePage, PDF, SkillsPage} from "pods";
import classes from "./main.scene.scss";
import IconButton from "rsuite/IconButton";
import ArrowUpLineIcon from "@rsuite/icons/ArrowUpLine";
import Divider from "rsuite/Divider";
import {Animation, Reveal} from "react-genie";

export const MainScene = () => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div className={classes.wrapper}>
            <HomePage/>
            <AcademicPage/>
            <Reveal animation={Animation.SlideInRight}>
                <ExperiencePage/>
            </Reveal>

            <Reveal animation={Animation.FadeInUp}>
                <SkillsPage/>
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
    );
}
