import * as React from "react";
import {useEffect, useState} from "react";
import Progress from 'rsuite/Progress';
import * as chroma from "chroma-js";
import {BrowserView, MobileView} from "react-device-detect";

const Line = Progress.Line;

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
                <Line percent={props.percent} strokeColor={color}/>
            </BrowserView>
            <MobileView>
                <Line percent={props.percent} strokeColor={color}/>
            </MobileView>
        </div>
    );
};

ProgressComponent.defaultProps = {
    loadLineProgress: false
};
