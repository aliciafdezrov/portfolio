import {connect} from "react-redux";
import * as React from "react";
import {injectIntl} from "react-intl";
import {DashboardPage, IDispatchPropsDashboardPage, IPropsDashboardPage} from "./DashboardPage";
import {IReducers} from "../reducers/IndexReducers";

const mapStateToProps = (state: IReducers): IPropsDashboardPage => ({

});

const mapDispatchToProps = (dispatch): IDispatchPropsDashboardPage => ({
});

export const DashboardContainer = connect<IPropsDashboardPage, IDispatchPropsDashboardPage, {}>(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(DashboardPage));