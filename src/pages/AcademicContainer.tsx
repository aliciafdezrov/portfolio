import {connect} from "react-redux";
import * as React from "react";
import {injectIntl} from "react-intl";
import {AcademicPage, IDispatchPropsAcademicPage, IPropsAcademicPage} from "./AcademicPage";
import {IReducers} from "../reducers/IndexReducers";

const mapStateToProps = (state: IReducers): IPropsAcademicPage => ({

});

const mapDispatchToProps = (dispatch): IDispatchPropsAcademicPage => ({
});

export const AcademicContainer = connect<IPropsAcademicPage, IDispatchPropsAcademicPage, {}>(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(AcademicPage));