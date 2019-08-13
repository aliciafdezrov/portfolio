import * as React from "react";
import {Document, Page} from 'react-pdf';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
const file = require("../../docs/CV.pdf");

const notify = () => toast('⚠️ ¿Te gustaría descargarlo? ', {
    position: "top-right",
    autoClose: 15000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    containerId: 'Download'
});

export class MyDocument extends React.Component<{}, {}> {
    public constructor(props) {
        super(props);
    }

    state = {
        numPages: null,
        pageNumber: 1,
        loading: true
    };

    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({numPages});
        this.setState({loading: false});
        notify();
    };

    public render() {
        return (
            <div className="container-fluid">
                <div>
                    <div>
                        <ToastContainer containerId={'Download'}
                                        onClick={() => {window.location.href=file}}
                                        position={toast.POSITION.TOP_LEFT}/>
                    </div>
                </div>
                <div>
                    <Document
                        file={file}
                        error="Algo fue mal al cargar el cv. Envíame un correo al email de contacto y puedo enviartelo personalmente."
                        loading={<ClimbingBoxLoader color={'#4DB6AC'}
                                                    size={40}
                                                    css="climbing-loader"
                                                    loading={this.state.loading}/>}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={this.state.pageNumber}/>
                    </Document>
                    <p>Página {this.state.pageNumber} de {this.state.numPages}</p>
                </div>
            </div>
        );
    }
}