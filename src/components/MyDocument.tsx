import * as React from "react";
import {Document, Page} from 'react-pdf';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

    };

    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({numPages});
        notify();
    };

    public render() {
        return (
            <div className="container-fluid">
                <div>
                    <div>
                        <ToastContainer containerId={'Download'}
                                        onClick={() => {window.location=file}}
                                        position={toast.POSITION.TOP_LEFT}/>
                    </div>
                </div>
                <div>
                    <Document
                        file={file}
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