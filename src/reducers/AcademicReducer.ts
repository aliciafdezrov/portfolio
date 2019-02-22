import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";

export class AcademicState {

    public constructor() {
    }
}

export function AcademicReducer(state: AcademicState = new AcademicState(), action: Action): AcademicState {
    switch (action.type) {

        default:
            return state;
    }
}