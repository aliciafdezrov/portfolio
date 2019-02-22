import {combineReducers} from "redux";
import {HomeReducer, HomeState} from "./HomeReducer";
import {DashboardReducer, DashboardState} from "./DashboardReducer";

export default combineReducers <IReducers> ({
    HomeReducer,
    DashboardReducer
});

export interface IReducers {
    HomeReducer: HomeState,
    DashboardReducer: DashboardState,
}