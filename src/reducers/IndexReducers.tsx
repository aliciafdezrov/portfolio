import {combineReducers} from "redux";
import {DashboardReducer, DashboardState} from "./DashboardReducer";

export default combineReducers <IReducers> ({
    HomeReducer: DashboardReducer,
});

export interface IReducers {
    HomeReducer: DashboardState,
}