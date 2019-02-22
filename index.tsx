import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./src/components/App";
import {create, JSSOptions} from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import 'font-awesome/css/font-awesome.min.css';


const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jssPresset: JSSOptions = jssPreset();
jssPresset.insertionPoint = "insertion-point-jss";
const jss = create(jssPresset);


class Index {
    public constructor() {

        ReactDOM.render((
                <JssProvider jss={jss} generateClassName={generateClassName}>
                    <App/>
                </JssProvider>
            ),
            document.getElementById('root')
        );
    }
}

new Index();