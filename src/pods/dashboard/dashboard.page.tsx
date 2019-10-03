import * as React from "react";
import {BottomNavigation} from "react-md/lib/BottomNavigations";
import * as classes from "./dashboard.scss";

export interface Props {
    activeIndex: number,
    links: Array<any>;
    theme: any;
}

export interface DispatchProps {
    setActiveIndex: (index: number) => void;
}

export const DashboardPage = (props: Props & DispatchProps) => {
    return (
        <div className={props.theme}>
            <div className={classes.dashboardSection}>
                <BottomNavigation
                    dynamic
                    links={props.links}
                    colored
                    activeIndex={props.activeIndex}
                    onNavChange={props.setActiveIndex}
                />
            </div>
        </div>
    );
}