import * as React from "react";
import * as ReactDOM from "react-dom";
import {DashboardPage} from "./src/pages/DashboardPage";

class Index {
    public constructor() {

        ReactDOM.render((<DashboardPage/>),
            document.getElementById('root')
        );
    }
}

new Index();