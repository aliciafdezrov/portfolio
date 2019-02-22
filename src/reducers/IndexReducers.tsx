import {combineReducers} from "redux";
import {HomeReducer, HomeState} from "./HomeReducer";
import {DashboardReducer, DashboardState} from "./DashboardReducer";
import {AcademicReducer, AcademicState} from "./AcademicReducer";

export default combineReducers <IReducers> ({
    HomeReducer,
    DashboardReducer,
    AcademicReducer
});

export interface IReducers {
    HomeReducer: HomeState,
    DashboardReducer: DashboardState,
    AcademicReducer: AcademicState
}