import 'rc-progress/assets/index.css';
import * as React from "react";
import {useEffect, useState} from "react";
import {Line} from 'rc-progress';
import * as chroma from "chroma-js";
import {BrowserView, MobileView} from "react-device-detect";

export interface IProgressComponentProps {
    percent: number;
}

export const ProgressComponent = (props: IProgressComponentProps) => {
    const [color, setColor] = useState('#108ee9');

    useEffect(() => {
        let scale = chroma.scale(['#108ee9', '#bc7bd4']);
        setColor(scale(props.percent / 100).hex());
    }, [props.percent]);

    return (
        <div>
            <BrowserView>
                <Line percent={props.percent}
                      strokeLinecap="round"
                      strokeWidth={2}
                      strokeColor={color}/>
            </BrowserView>
            <MobileView>
                <Line percent={props.percent}
                      strokeLinecap="round"
                      strokeWidth={2}
                      strokeColor={color}/>
            </MobileView>
        </div>
    );
};

ProgressComponent.defaultProps = {
    loadLineProgress: false
};