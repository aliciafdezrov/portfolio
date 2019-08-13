import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import {DashboardPage, IDispatchPropsDashboardPage, IPropsDashboardPage} from "./DashboardPage";
import {IReducers} from "../reducers/IndexReducers";
import {ChangeRouteActionThunk} from "../actions/ChangeRouteActionThunk";

const mapStateToProps = (state: IReducers): IPropsDashboardPage => ({
    currentRoute: state['reducers'].HomeReducer.currentRoute
});

const mapDispatchToProps = (dispatch): IDispatchPropsDashboardPage => ({
    pushRouter: (id) => dispatch(ChangeRouteActionThunk(id))
});

export const DashboardContainer = connect<IPropsDashboardPage, IDispatchPropsDashboardPage, {}>(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(DashboardPage));