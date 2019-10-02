import 'rc-progress/assets/index.css';
import * as React from "react";
import {ProgressComponent} from "./ProgressComponent";

export interface ITechnologyRowProps {
    percent: number;
    label: string;
}

export class TechnologyRow extends React.Component<ITechnologyRowProps, {}> {
    public constructor(props: ITechnologyRowProps) {
        super(props);
    }

    public render() {
        return (
            <div className="technology-container">
                    <div className="technology-label">
                        <label>{this.props.label}</label>
                    </div>

                    <div className="technology-progress">
                        <ProgressComponent percent={this.props.percent}/>
                    </div>
            </div>
        );
    }
}