import * as React from "react";
import { Document, Page } from 'react-pdf';

const file = require("../../docs/CV.pdf");

export class MyDocument extends React.Component<{}, {}> {
    public constructor(props) {
        super(props);
    }

    state = {
        numPages: null,
        pageNumber: 1,
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    public render() {
        return (
            <div>
                <Document
                    file={file}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={this.state.pageNumber} />
                </Document>
                <p>Página {this.state.pageNumber} de {this.state.numPages}</p>
            </div>
        );
    }
}