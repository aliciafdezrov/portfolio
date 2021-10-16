import * as React from "react";
import * as ReactDOM from "react-dom";
import {MainScene} from "scenes";
import {RevealGlobalStyles} from "react-genie";
import 'rsuite/styles/index.less';

ReactDOM.render((
        <>
            <RevealGlobalStyles/>
            <MainScene/>
        </>
    ),
    document.getElementById('root')
);
