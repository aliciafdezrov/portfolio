import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";

export class DashboardState {

    public constructor() {
    }
}

export function DashboardReducer(state: DashboardState = new DashboardState(), action: Action): DashboardState {
    switch (action.type) {

        default:
            return state;
    }
}