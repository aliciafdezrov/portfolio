import * as React from "react";
import Progress from 'rsuite/Progress';
import "rsuite/Progress/styles/index.less";
import * as chroma from "chroma-js";

const Line = Progress.Line;

export interface IProgressComponentProps {
    percent: number;
}

export const ProgressComponent = (props: IProgressComponentProps) => {
    const [color, setColor] = React.useState('#108ee9');

    React.useEffect(() => {
        let scale = chroma.scale(['#108ee9', '#bc7bd4']);
        setColor(scale(props.percent / 100).hex());
    }, [props.percent]);

    return (
        <Line percent={props.percent} strokeColor={color} showInfo={false}/>
    );
};

ProgressComponent.defaultProps = {
    loadLineProgress: false
};
