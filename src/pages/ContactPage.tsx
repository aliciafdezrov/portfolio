import * as React from "react";
import {Paper} from "react-md";
import {Avatar} from "react-md/lib/Avatars";
import List from "react-md/lib/Lists";
import ListItem from "react-md/lib/Lists/ListItem";
import FontIcon from "react-md/lib/FontIcons";
import {Divider} from "react-md/lib/Dividers";
import {BrowserView, MobileView} from 'react-device-detect';

const photo = require("../../assets/avatars/photo.jpg");

export interface IPropsContactPage {
}

export interface IDispatchPropsContactPage {

}

export interface IStateContactPage {

}

export class ContactPage extends React.Component<IPropsContactPage & IDispatchPropsContactPage, IStateContactPage> {
    public constructor(props: IPropsContactPage & IDispatchPropsContactPage) {
        super(props);
    }

    private openLink(linkDestination: string) {
        let link = document.createElement('a');
        link.href = linkDestination;
        link.click();
    }

    public render() {
        return (
            <div className="central-div">
                <Paper className="title-paper white-background" zDepth={2}>
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="contact-title contact-text-div">
                                <h4>Información de contacto</h4>
                            </div>

                            <Divider/>
                            <div className="contact-title">
                                <List>
                                    <div>
                                        <BrowserView>
                                            <ListItem primaryText="aliciafdezrov@gmail.com"
                                                      onClick={() => this.openLink("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Petición%20desde%20cv&to=aliciafdezrov@gmail.com&body=Cuerpo+del+mensaje")}
                                                      leftIcon={<FontIcon>mail</FontIcon>}>
                                            </ListItem>
                                        </BrowserView>
                                        <MobileView>
                                            <ListItem primaryText="aliciafdezrov@gmail.com"
                                                      onClick={() => this.openLink("mailto:aliciafdezrov@gmail.com?subject=Petición%20desde%20cv")}
                                                      leftIcon={<FontIcon>mail</FontIcon>}>
                                            </ListItem>
                                        </MobileView>
                                    </div>

                                    <ListItem primaryText="Málaga, 29012 (Spain)"
                                              leftIcon={<FontIcon>place</FontIcon>}>
                                    </ListItem>
                                </List>

                                <div style={{paddingTop: '2vh'}}>
                                    <a href="https://www.linkedin.com/in/alicia-fernández-rovira-70885811a"
                                       target="_blank">
                                        https://www.linkedin.com/in/alicia-fernández-rovira-70885811a
                                    </a>
                                </div>
                                <div style={{paddingTop: '2vh'}}>
                                    <a href="https://github.com/aliciafdezrov"
                                       target="_blank">
                                        https://github.com/aliciafdezrov
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 avatar-style">
                            <Avatar
                                alt="Me"
                                src={photo}
                                className="avatar"
                            />
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}