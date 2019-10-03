import 'rc-progress/assets/index.css';
import * as React from "react";
import {ProgressComponent} from "./progress.component";

export interface ITechnologyRowProps {
    percent: number;
    label: string;
}

export const TechnologyRow = (props: ITechnologyRowProps) => {
    return (
        <div className="technology-container">
            <div className="technology-label">
                <label>{props.label}</label>
            </div>

            <div className="technology-progress">
                <ProgressComponent percent={props.percent}/>
            </div>
        </div>
    );
}