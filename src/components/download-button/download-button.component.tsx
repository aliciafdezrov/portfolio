import * as React from "react";
import Button from "rsuite/Button";
import 'rsuite/Button/styles/index.less';
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import classes from "./download-button.component.scss";

interface Props {
    placeholder?: string;
    onClick: () => void;
}

export const DownloadButton = (props: Props) => {
    const {placeholder, onClick} = props;

    return (
        <div className={classes.buttonWrapper}>
            <Button color="violet" onClick={onClick} appearance={"primary"}>
                <FileDownloadIcon/> {placeholder}
            </Button>
        </div>
    );
};

