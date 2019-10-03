import * as React from "react";
import * as ReactDOM from "react-dom";
import {MainScene} from "scenes";
import {RevealGlobalStyles} from "react-genie";

class Index {
    public constructor() {
        ReactDOM.render((
                <>
                    <RevealGlobalStyles/>
                    <MainScene/>
                </>
            ),
            document.getElementById('root')
        );
    }
}

new Index();