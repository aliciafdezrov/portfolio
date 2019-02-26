import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";

export class HomeState {
    currentRoute: number;

    public constructor() {
        this.currentRoute = 0;
    }
}

export function HomeReducer(state: HomeState = new HomeState(), action: Action): HomeState {
    let newState: HomeState;

    switch (action.type) {
        case ActionConstants.CHANGE_ROUTE:
            let newRoute = action["id"];
            newState = {...state, ...{currentRoute: newRoute}};
            return newState;

        default:
            return state;
    }
}