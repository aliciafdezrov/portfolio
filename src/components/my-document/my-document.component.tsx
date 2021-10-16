import * as React from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import classes from './my-document.component.scss';

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
    React.useEffect(() => {
        if (props.showDialog) {
            notify();
        }
    }, [props.showDialog]);

    function downloadFile() {
        let link = document.createElement('a');
        link.href = file;
        link.download = "aliciafdezrovCV";
        link.click();
    }

    return (
        <div className={classes.container}>
            <div>
                <ToastContainer containerId={'Download'}
                                toastClassName={classes.toast}
                                onClick={() => downloadFile()}
                                position={toast.POSITION.TOP_LEFT}/>
            </div>
            {/*<div className={classes.documentWrapper}>
                <Document
                    file={file}
                    error="Algo fue mal al cargar el cv. Envíame un correo al email de contacto y puedo enviartelo personalmente."
                    loading="Cargando el archivo..."
                >
                    <Page className={classes.pageWrapper} renderMode='svg' pageNumber={1}/>
                </Document>
            </div>*/}
        </div>
    );
};

MyDocument.defaultProps = {
    showDialog: false
};
