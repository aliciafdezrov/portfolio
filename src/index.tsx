import * as React from "react";
import * as ReactDOM from "react-dom";
import {RevealGlobalStyles} from "react-genie";
import {MainScene} from "scenes";

ReactDOM.render((
        <>
            <RevealGlobalStyles/>
            <MainScene/>
        </>
    ),
    document.getElementById('root')
);
