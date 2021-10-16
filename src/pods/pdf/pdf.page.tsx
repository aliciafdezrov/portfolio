import * as React from "react";
import {MyDocument} from "components";
import IconButton from "rsuite/IconButton";
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import classes from "./pdf.scss";

const cv = require('../../../assets/CV.pdf');

export interface Props {
    showDialog: boolean;
}

export const PDF = (props: Props) => {
    return (
        <>
            <MyDocument key="cv" showDialog={props.showDialog}/>
            <div className={classes.mobileButtonWrapper}>
                <IconButton color="violet" href={cv} icon={<FileDownloadIcon/>}>
                    ¡Pulsa para descargar el cv en pdf!
                </IconButton>
            </div>
        </>
    );
};

