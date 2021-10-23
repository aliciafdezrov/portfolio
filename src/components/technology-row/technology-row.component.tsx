import * as React from "react";
import classes from './technology-row.scss';
import {ProgressComponent} from "../progress.component";

export interface ITechnologyRowProps {
    percent: number;
    label: string;
}

export const TechnologyRow = (props: ITechnologyRowProps) => {
    return (
        <div className={classes.technologyContainer}>
            <div className={classes.technologyLabel}>
                <p>{props.label}</p>
            </div>

            <div className={classes.technologyProgress}>
                <ProgressComponent percent={props.percent}/>
            </div>
        </div>
    );
}
