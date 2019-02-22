import {ChangeRouteAction} from "./ChangeRouteAction";
import {history} from "../components/App";
import {RouteConstants} from "../common/RouteConstants";

export function ChangeRouteActionThunk(id) {
    return function (dispatch) {
        dispatch(ChangeRouteAction(id));
        if (id === 0) {
            history.push(RouteConstants.INDEX_ROUTE);
        } else if (id === 2) {
            history.push(RouteConstants.ACADEMIC_ROUTE);
        }
    }
}
