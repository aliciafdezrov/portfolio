import 'rc-progress/assets/index.css';
import * as React from "react";
import {useEffect, useState} from "react";
import {Line} from 'rc-progress';
import * as chroma from "chroma-js";
import {BrowserView, MobileView} from "react-device-detect";

export interface IProgressComponentProps {
    percent: number
}

export const ProgressComponent = (props: IProgressComponentProps) => {
    const [percent, setPercent] = useState(0);
    const [color, setColor] = useState('#108ee9');

    useEffect(() => {
        increase()
    }, []);

    function increase() {
        let newPercent = percent + 4;
        let scale = chroma.scale(['#108ee9', '#87d068']);
        setColor(scale(percent / 100).hex());
        if (newPercent >= props.percent) {
            clearTimeout();
            return;
        }
        setPercent(newPercent);
        setTimeout(() => {
            increase()
        }, 0);
    }

    return (
        <div>
            <BrowserView>
                <Line percent={percent}
                      strokeLinecap="round"
                      strokeWidth={2}
                      strokeColor={color}/>
            </BrowserView>
            <MobileView>
                <Line percent={percent}
                      strokeLinecap="round"
                      strokeWidth={4}
                      strokeColor={color}/>
            </MobileView>
        </div>
    );
}