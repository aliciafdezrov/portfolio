import * as React from "react";
import {Document, Page} from 'react-pdf';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as classes from './my-document.component.scss';
import {useEffect} from "react";

const file = require("../../../assets/CV.pdf");

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

export const MyDocument = (props: Props) => {
    useEffect(() => {
        if (props.showDialog) {
            notify()
        }
    }, [props.showDialog]);

    function downloadFile() {
        let link = document.createElement('a');
        link.href = file;
        link.download = file;
        link.click();
    }

    return (
        <div className={classes.container}>
            <div>
                <ToastContainer containerId={'Download'}
                                onClick={() => downloadFile()}
                                position={toast.POSITION.TOP_LEFT}/>
            </div>
            <div className={classes.documentWrapper}>
                <Document
                    file={file}
                    error="Algo fue mal al cargar el cv. Envíame un correo al email de contacto y puedo enviartelo personalmente."
                    loading="Cargando el archivo..."
                >
                    <Page className={classes.pageWrapper} renderMode='svg' pageNumber={1}/>
                </Document>
            </div>
        </div>
    );
};

MyDocument.defaultProps = {
    showDialog: false
};