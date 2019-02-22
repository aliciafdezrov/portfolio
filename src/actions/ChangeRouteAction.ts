import {ActionConstants} from "./ActionConstants";

export interface IChangeRouteAction {
    type: string;
    id: number
}

export function ChangeRouteAction(id: number): IChangeRouteAction {
    return {
        type: ActionConstants.CHANGE_ROUTE,
        id: id
    };
}