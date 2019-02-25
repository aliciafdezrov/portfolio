import * as React from "react";
import { Line } from 'rc-progress';
import {LinearProgress} from "@material-ui/core";

export interface IPropsProgressComponent {
    percent: number;
}

export interface IDispatchPropsProgressComponent {

}

export interface IStateProgressComponent {

}

export class ProgressComponent extends React.Component<IPropsProgressComponent & IDispatchPropsProgressComponent, IStateProgressComponent> {
    public constructor(props: IPropsProgressComponent & IDispatchPropsProgressComponent) {
        super(props);
    }

    timer = null;

    state = {
        completed: 0,
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 80);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        if (completed === this.props.percent) {
            //this.setState({ completed: 0 });
        } else {
            const diff = 10;
            this.setState({ completed: Math.min(completed + diff, 100) });
        }
    };

    public render() {
        return (
            <div>
                <LinearProgress variant="determinate" value={this.state.completed} />
            </div>
        );
    }
}