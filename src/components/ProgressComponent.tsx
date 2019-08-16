import 'rc-progress/assets/index.css';
import * as React from "react";
import {Line} from 'rc-progress';
import * as chroma from "chroma-js";
import {BrowserView, MobileView} from "react-device-detect";

export interface IProgressComponentProps {
    percent: number
}

export class ProgressComponent extends React.Component<IProgressComponentProps, {}> {
    public constructor(props: IProgressComponentProps) {
        super(props);
    }

    state = {
        percent: 0,
        color: '#108ee9'
    };

    componentDidMount() {
        this.increase();
    }

    private increase() {
        let newPercent = this.state.percent + 4;
        let scale = chroma.scale(['#108ee9', '#87d068']);
        this.setState({color: scale(this.state.percent/100).hex()});
        if (newPercent >= this.props.percent) {
            clearTimeout();
            return;
        }
        this.setState({percent: newPercent});
        setTimeout(() => {
            this.increase()
        }, 0);
    }


    public render() {
        return (
            <div>
                <BrowserView>
                    <Line percent={this.state.percent}
                          strokeLinecap="round"
                          strokeWidth={2}
                          strokeColor={this.state.color}/>
                </BrowserView>
                <MobileView>
                    <Line percent={this.state.percent}
                          strokeLinecap="round"
                          strokeWidth={4}
                          strokeColor={this.state.color}/>
                </MobileView>
            </div>
        );
    }
}