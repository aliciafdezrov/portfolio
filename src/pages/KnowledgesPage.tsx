import * as React from "react";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {Paper} from "react-md";
import {ProgressComponent} from "../components/ProgressComponent";

export interface IPropsKnowledgePage {
    intl?: ReactIntl.InjectedIntl;
}

export interface IDispatchPropsKnowledgePage {

}

export interface IStateKnowledgePage {

}

export class KnowledgePage extends React.Component<IPropsKnowledgePage & IDispatchPropsKnowledgePage & InjectedIntlProps, IStateKnowledgePage> {
    public constructor(props: IPropsKnowledgePage & IDispatchPropsKnowledgePage & InjectedIntlProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <div className="central-div">
                        <Paper className="title-paper" zDepth={2}>
                            <div className="row container-fluid">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <h3>Frontend</h3>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>React</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>Redux</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>Webpack</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <h3>Backend</h3>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>J2EE</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>Java</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>Maven</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>WildFly</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>Apache Spark</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>GraphQL</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>RestFull</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>Express</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>NodeJS</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>EcmaScript6</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row container-fluid">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <h3>Gestión bases de datos</h3>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>MySQL</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>Oracle</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>MongoDB</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <h3>Otros</h3>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>Git</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>Docker</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <label>Jenkins</label>
                                        </div>

                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                            <ProgressComponent percent={50}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}