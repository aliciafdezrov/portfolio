import * as React from "react";
import classes from "./timeline.component.scss";
import {Divider, Timeline} from "rsuite";
import {Reveal} from "react-genie";
import {TimeSectionItem} from "./time-section.vm";
import {TimeLineItem} from "./timeline-item.component";

export interface Props {
    title: string;
    items: Array<TimeSectionItem>;
    animationDelay: number;
    animationTransition: any;
    isMobile: boolean;
}

export const TimeLine = (props: Props) => {
    const {title, items, animationDelay, animationTransition, isMobile} = props;
    return (
        <Reveal delay={animationDelay} animation={animationTransition}>
            <div>
                <h4>{title}</h4>
                <Divider/>
                <div className={classes.stepsStyle}>
                    <Timeline>
                        {
                            items.map((item: TimeSectionItem) => (
                                <TimeLineItem key={item.title} title={item.title} subtitle={item.subtitle}
                                              description={item.description} isMobile={isMobile}/>
                            ))
                        }
                    </Timeline>
                </div>
            </div>
        </Reveal>
    )
};
