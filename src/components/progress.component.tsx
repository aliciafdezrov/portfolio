import * as React from "react";
import Progress from 'rsuite/Progress';
import "rsuite/Progress/styles/index.less";

const Line = Progress.Line;

export interface IProgressComponentProps {
    percent: number;
}

export const ProgressComponent = (props: IProgressComponentProps) => {
    const [color, setColor] = React.useState('#108ee9');

    React.useEffect(() => {
        if (props.percent < 50) {
            setColor('#108ee9')
        } else {
            setColor('#bc7bd4')
        }
    }, [props.percent]);

    return (
        <Line percent={props.percent} strokeColor={color} showInfo={false}/>
    );
};

ProgressComponent.defaultProps = {
    loadLineProgress: false
};
