import * as React from "react";
import * as ReactDOM from "react-dom";
import {MainScene} from "scenes";

class Index {
    public constructor() {
        ReactDOM.render((<MainScene/>),
            document.getElementById('root')
        );
    }
}

new Index();