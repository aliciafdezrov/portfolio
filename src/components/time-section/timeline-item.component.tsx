import * as React from "react";
import {Timeline} from "rsuite";

export interface Props {
    title: string;
    subtitle: string;
    description: string;
    isMobile: boolean;
}

export const TimeLineItem = (props: Props) => {
    const {title, subtitle, description, isMobile} = props;

    return (
        <Timeline.Item>
            <h5 style={{color: 'white'}}>{title}</h5>
            {
                subtitle?.length > 0 && (
                    <h6>{subtitle}</h6>
                )
            }
            {!isMobile && (
                <p>{description}</p>
            )
            }
        </Timeline.Item>
    )
};
