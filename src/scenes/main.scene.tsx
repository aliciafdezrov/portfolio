import * as React from "react";
import {useState} from "react";
import {AcademicPage, ContactPage, ExperiencePage, HomePage, SkillsPage} from "pods";
import classes from "./main.scene.scss";
import IconButton from "rsuite/IconButton";
import ArrowUpLineIcon from "@rsuite/icons/ArrowUpLine";
import Divider from "rsuite/Divider";
import {Animation, Reveal} from "react-genie";
import {Toast} from "components/toastify/toast.component";
import {DownloadButton} from "components/download-button";

const cv = require('../../assets/CV.pdf');
export const containerId = 'Download';
export const message = '⚠️ ¿Te gustaría descargarlo? ';

export const MainScene = () => {
    const [showDialog, setShowDialog] = useState(false);

    React.useEffect(() => {
        setShowDialog(true);
    }, []);

    function downloadFile() {
        let link = document.createElement('a');
        link.href = cv;
        link.download = "aliciafdezrovCV";
        link.click();
    }

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

            <Divider>
                <IconButton
                    aria-label="scroll-to-top"
                    icon={<ArrowUpLineIcon/>}
                    color={"violet"}
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>
            </Divider>

            <Toast showDialog={showDialog} message={message} containerId={containerId} onClick={downloadFile}/>
            <DownloadButton onClick={downloadFile} placeholder="¡Pulsa para descargar el cv en pdf!"/>
        </div>
    );
}
