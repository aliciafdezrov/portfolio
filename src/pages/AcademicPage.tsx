import * as React from "react";
import {Avatar, Divider, List, ListItem, ListItemText} from "@material-ui/core";
import {Paper} from "react-md";

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
                                <ListItem>
                                    <Avatar>
                                        <img src={uma} alt="uma" height="40px" width={"50px"}/>
                                    </Avatar>
                                    <ListItemText primary="Grado Ingeniería de la Salud (Universidad de Málaga)"
                                                  secondary="Sept 2013 - Sept 2017"/>
                                </ListItem>
                            </List>
                        </div>
                        <Divider/>
                        <div>
                            <List>
                                <ListItem>
                                    <Avatar>
                                        <img src={uma} alt="uma" height="40px" width={"50px"}/>
                                    </Avatar>
                                    <ListItemText
                                        primary="Curso inferencia de redes de genes regulatorios usando inteligencia artificial"
                                        secondary="Jul 2015"/>
                                </ListItem>
                            </List>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}