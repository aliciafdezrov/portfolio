import {combineReducers} from "redux";
import {HomeReducer, HomeState} from "./HomeReducer";

export default combineReducers <IReducers> ({
    HomeReducer,
});

export interface IReducers {
    HomeReducer: HomeState,
}