import * as React from "react";
import {Document, Page} from 'react-pdf';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as classes from './my-document.component.scss';

const file = require("../../../assets/CV.pdf");

const notify = () => toast('⚠️ ¿Te gustaría descargarlo? ', {
    position: "top-right",
    autoClose: 15000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    containerId: 'Download'
});

export const MyDocument = () => {
    const onDocumentLoadSuccess = ({numPages}) => {
        notify();
    };

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
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page className={classes.pageWrapper} renderMode='svg' pageNumber={1}/>
                </Document>
            </div>
        </div>
    );
}