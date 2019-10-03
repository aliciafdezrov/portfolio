import * as React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MyDocument} from "components";
import {Icon, Button} from "rsuite";
import * as classes from "./pdf.scss";
const cv = require('../../../assets/CV.pdf');

export const PDF = () => {
    return (
        <>
            <BrowserView>
                <MyDocument key="cv"/>
            </BrowserView>
            <MobileView>
                <div className={classes.mobileButtonWrapper}>
                    <Button color="violet" href={cv} download>
                        <Icon icon="file-download"/> ¡Pulsa para descargar el cv en pdf!
                    </Button>
                </div>
            </MobileView>
        </>
    );
}