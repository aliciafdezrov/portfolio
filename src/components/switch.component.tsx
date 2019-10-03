import * as React from "react";
import {SwitchTransition, CSSTransition} from "react-transition-group";

export interface ISwitchComponentProps {
    components: any,
    index: number,
    transition: any
}

export const SwitchComponent = (props: ISwitchComponentProps) => {

    return (
        <>
            <SwitchTransition>
                <CSSTransition key={props.index}
                               timeout={300}
                               classNames={props.transition}>
                    {
                        props.components[props.index]
                    }
                </CSSTransition>
            </SwitchTransition>
        </>
    );
}