import {connect} from "react-redux";
import {DashboardPage, IDispatchPropsDashboardPage, IPropsDashboardPage} from "./DashboardPage";
import {IReducers} from "../reducers/IndexReducers";
import {ChangeRouteAction} from "../actions/ChangeRouteAction";
import {history} from "../components/App";
import {RouteConstants} from "../common/RouteConstants";

const mapStateToProps = (state: IReducers): IPropsDashboardPage => ({
    currentRoute: state['reducers'].HomeReducer.currentRoute
});

const mapDispatchToProps = (dispatch): IDispatchPropsDashboardPage => ({
    pushRouter: (id) => {
        dispatch(ChangeRouteAction(id));
        if (id === 0) {
            history.push(RouteConstants.INDEX_ROUTE);

        } else if (id === 1) {
            history.push(RouteConstants.EXPERIENCE_ROUTE);

        } else if (id === 2) {
            history.push(RouteConstants.KNOWLEDGE_ROUTE);

        } else if (id === 3) {
            history.push(RouteConstants.CONTACT_ROUTE);
        }
    }
});

export const DashboardContainer = connect<IPropsDashboardPage, IDispatchPropsDashboardPage, {}>(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPage);