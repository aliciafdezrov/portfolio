import * as React from "react";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {Paper} from "react-md";

export interface IPropsAcademicPage {
    intl?: ReactIntl.InjectedIntl;
}

export interface IDispatchPropsAcademicPage {

}

export interface IStateAcademicPage {

}

export class AcademicPage extends React.Component<IPropsAcademicPage & IDispatchPropsAcademicPage & InjectedIntlProps, IStateAcademicPage> {
    public constructor(props: IPropsAcademicPage & IDispatchPropsAcademicPage & InjectedIntlProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <div className="central-div">
                        <Paper className="title-paper" zDepth={2}>
                            <div className="title">
                                <h3>HOLI</h3>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}