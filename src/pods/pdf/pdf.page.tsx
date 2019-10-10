import * as React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MyDocument} from "components";
import {Icon, Button} from "rsuite";
import * as classes from "./pdf.scss";
const cv = require('../../../assets/CV.pdf');

export interface Props {
    showDialog: boolean;
}

export const PDF = (props: Props) => {
    return (
        <>
            <BrowserView>
                <MyDocument key="cv" showDialog={props.showDialog}/>
            </BrowserView>
            <MobileView>
                <div className={classes.mobileButtonWrapper}>
                    <Button name="download-cv-pdf-button" color="violet" href={cv} download="aliciafdezrovCV">
                        <Icon icon="file-download"/> ¡Pulsa para descargar el cv en pdf!
                    </Button>
                </div>
            </MobileView>
        </>
    );
};

