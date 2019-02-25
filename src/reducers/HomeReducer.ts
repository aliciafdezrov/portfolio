import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";
import {history} from "../components/App";
import {RouteConstants} from "../common/RouteConstants";

export class HomeState {
    currentRoute: number;

    public constructor() {

        if (history !== undefined) {
            if (history.location.pathname === RouteConstants.INDEX_ROUTE) {
                this.currentRoute = 0;

            } else if (history.location.pathname === RouteConstants.ACADEMIC_ROUTE) {
                this.currentRoute = 1;
            } else if (history.location.pathname === RouteConstants.EXPERIENCE_ROUTE) {
                this.currentRoute = 2;
            } else if (history.location.pathname === RouteConstants.KNOWLEDGE_ROUTE) {
                this.currentRoute = 3;
            } else if (history.location.pathname === RouteConstants.CONTACT_ROUTE) {
                this.currentRoute = 4;
            } else {
                this.currentRoute = null;
            }
        } else {
            this.currentRoute = 0;
        }
    }
}

export function HomeReducer(state: HomeState = new HomeState(), action: Action): HomeState {
    let newState: HomeState;

    switch (action.type) {
        case ActionConstants.CHANGE_ROUTE:
            let newRoute = action["route"];
            newState = objectAssign({}, state, {currentRoute: newRoute});
            return newState;

        default:
            return state;
    }
}