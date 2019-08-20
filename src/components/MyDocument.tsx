import * as React from "react";
import {Document, Page} from 'react-pdf';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "react-md";
const file = require("../../assets/CV.pdf");

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

    private nextPage() {
        if (this.state.pageNumber < this.state.numPages) {
            this.setState({pageNumber: this.state.pageNumber + 1})
        }
    }

    private prevPage() {
        if (this.state.pageNumber > 1) {
            this.setState({pageNumber: this.state.pageNumber - 1})
        }
    }

    private downloadFile(){
        let link=document.createElement('a');
        link.href = file;
        link.download = file;
        link.click();
    }

    public render() {
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <div>
                        <ToastContainer containerId={'Download'}
                                        onClick={() => this.downloadFile()}
                                        position={toast.POSITION.TOP_LEFT}/>
                    </div>
                </div>
                <div className="container-fluid fab-style">
                    <div className="fab-left">
                        <Button floating primary onClick={() => this.prevPage()}>
                            arrow_left
                        </Button>
                    </div>

                    <div className="document-wrapper">
                        <Document
                            file={file}
                            error="Algo fue mal al cargar el cv. Envíame un correo al email de contacto y puedo enviartelo personalmente."
                            loading="Cargando el archivo..."
                            onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                            <Page className="page-wrapper" renderMode='svg' pageNumber={this.state.pageNumber}/>
                        </Document>
                    </div>

                    <div className="fab-right">
                        <Button floating primary onClick={() => this.nextPage()}>
                            arrow_right
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}