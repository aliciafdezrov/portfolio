import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";

export class HomeState {
    currentRoute: number;

    public constructor() {
        this.currentRoute = 3;
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