import * as React from "react";
import {Paper} from "react-md";
import List from "react-md/lib/Lists";
import ListItem from "react-md/lib/Lists/ListItem";
import {Avatar} from "react-md/lib/Avatars";
import Divider from "react-md/lib/Dividers";

const uma = require("../../docs/avatars/logo-universidad-de-malaga.png");

export interface IPropsAcademicPage {
}

export interface IDispatchPropsAcademicPage {

}

export interface IStateAcademicPage {

}

export class AcademicPage extends React.Component<IPropsAcademicPage & IDispatchPropsAcademicPage, IStateAcademicPage> {
    public constructor(props: IPropsAcademicPage & IDispatchPropsAcademicPage) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div className="central-div">
                    <Paper className="title-paper" zDepth={2}>
                        <div>
                            <List>
                                <ListItem primaryText="Grado Ingeniería de la Salud (Universidad de Málaga)"
                                            secondaryText="Sept 2013 - Sept 2017">
                                    <Avatar>
                                        <img src={uma} alt="uma" height="40px" width={"50px"}/>
                                    </Avatar>
                                </ListItem>
                            </List>
                        </div>
                        <Divider/>
                        <div>
                            <List>
                                <ListItem primaryText="Curso inferencia de redes de genes regulatorios usando inteligencia artificial"
                                            secondaryText="Jul 2015">
                                    <Avatar>
                                        <img src={uma} alt="uma" height="40px" width={"50px"}/>
                                    </Avatar>
                                </ListItem>
                            </List>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}