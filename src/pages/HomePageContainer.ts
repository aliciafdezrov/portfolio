import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import {HomePage, IDispatchPropsHomePage, IPropsHomePage} from "./HomePage";
import {IReducers} from "../reducers/IndexReducers";
import {ChangeRouteActionThunk} from "../actions/ChangeRouteActionThunk";

const mapStateToProps = (state: IReducers): IPropsHomePage => ({
    currentRoute: state['reducers'].HomeReducer.currentRoute
});

const mapDispatchToProps = (dispatch): IDispatchPropsHomePage => ({
    pushRouter: (id) => dispatch(ChangeRouteActionThunk(id))
});

export const HomePageContainer = connect<IPropsHomePage, IDispatchPropsHomePage, {}>(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(HomePage));