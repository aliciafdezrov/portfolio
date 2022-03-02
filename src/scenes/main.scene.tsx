import * as React from "react";
import {Animation, Reveal} from "react-genie";
import {AcademicContainer, ContactPage, ExperienceContainer, HomePage, SkillsPage} from "pods";
import * as classes from "./main.scene.styles";
import {DownloadButton, Toast} from "components";

const cv = require('../../assets/CV.pdf');
export const containerId = 'Download';
export const message = '⚠️ ¿Te gustaría descargarlo? ';

export const MainScene = () => {
    const [showDialog, setShowDialog] = React.useState(false);

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
            <ExperienceContainer/>
            <AcademicContainer/>

            <Reveal animation={Animation.FadeInUp}>
                <SkillsPage/>
            </Reveal>

            <ContactPage/>

            <Toast showDialog={showDialog} message={message} containerId={containerId} onClick={downloadFile}/>
            <DownloadButton onClick={downloadFile} placeholder="¡Pulsa para descargar el cv en pdf!"/>
        </div>
    );
}
