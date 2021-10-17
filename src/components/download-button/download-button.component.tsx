import * as React from "react";
import IconButton from "rsuite/IconButton";
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import classes from "./download-button.component.scss";

export interface Props {
    placeholder?: string;
    onClick: () => void;
}

export const DownloadButton = (props: Props) => {
    const {placeholder, onClick} = props;

    return (
        <div className={classes.buttonWrapper}>
            <IconButton color="violet" onClick={onClick} icon={<FileDownloadIcon/>}>
                {placeholder}
            </IconButton>
        </div>
    );
};

