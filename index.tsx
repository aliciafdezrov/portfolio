import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./src/components/App";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import 'font-awesome/css/font-awesome.min.css';

class Index {
    public constructor() {
        ReactDOM.render((
                    <App/>
            ),
            document.getElementById('root')
        );
    }
}

new Index();