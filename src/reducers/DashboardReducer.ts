import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";

export class DashboardState {
    currentRoute: number;

    public constructor() {
        this.currentRoute = 0;
    }
}

export function DashboardReducer(state: DashboardState = new DashboardState(), action: Action): DashboardState {
    let newState: DashboardState;

    switch (action.type) {
        case ActionConstants.CHANGE_ROUTE:
            let newRoute = action["id"];
            newState = {...state, ...{currentRoute: newRoute}};
            return newState;

        default:
            return state;
    }
}