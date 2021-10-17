import * as React from "react";
import IconButton from "rsuite/IconButton";
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import classes from "./pdf.scss";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const cv = require('../../../assets/CV.pdf');

const notify = () => toast('⚠️ ¿Te gustaría descargarlo? ', {
    position: "top-right",
    hideProgressBar: false,
    autoClose: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    containerId: 'Download'
});

export interface Props {
    showDialog: boolean;
}

export const PDF = (props: Props) => {
    React.useEffect(() => {
        if (props.showDialog) {
            notify();
        }
    }, [props.showDialog]);

    function downloadFile() {
        let link = document.createElement('a');
        link.href = cv;
        link.download = "aliciafdezrovCV";
        link.click();
    }

    return (
        <>
            <div>
                <ToastContainer containerId={'Download'}
                                toastClassName={classes.toast}
                                onClick={() => downloadFile()}
                                position={toast.POSITION.TOP_LEFT}/>
            </div>
            <div className={classes.buttonWrapper}>
                <IconButton color="violet" href={cv} icon={<FileDownloadIcon/>}>
                    ¡Pulsa para descargar el cv en pdf!
                </IconButton>
            </div>
        </>
    );
};

