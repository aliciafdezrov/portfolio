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
            <>
                <BrowserView>
                    <div className="central-div">
                        <Paper className="title-paper white-background contact-page-container" zDepth={2}>
                            <div>
                                <>
                                    <div className="contact-title contact-text-div">
                                        <h4>Información de contacto</h4>
                                        <Divider/>
                                    </div>

                                    <div className="contact-title contact-list">
                                        <List>
                                            <ListItem primaryText="aliciafdezrov@gmail.com"
                                                      onClick={() => this.openLink("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Petición%20desde%20cv&to=aliciafdezrov@gmail.com&body=Cuerpo+del+mensaje")}
                                                      leftIcon={<FontIcon>mail</FontIcon>}>
                                            </ListItem>

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
                                </>

                                <>
                                    <div>
                                        <h4>Un poco más sobre mi</h4>
                                        <Divider/>
                                        <p>Llevo desde 2016 trabajando, primero con una beca compaginándolo con mis
                                            estudios y
                                            más tarde contratada.Desde ese momento he estado trabajando como
                                            Desarrolladora
                                            Full-Stack. Siempre participando activamente en el diseño, creación y
                                            gestión de
                                            bases de datos, backend y frontend.</p>
                                    </div>
                                </>
                            </div>

                            <div className="avatar-style">
                                <Avatar
                                    alt="Me"
                                    src={photo}
                                    className="avatar"
                                />
                            </div>
                        </Paper>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="central-div">
                        <Paper className="title-paper white-background contact-page-container" zDepth={2}>
                            <div>
                                <div className="contact-title contact-text-div">
                                    <h4>Información de contacto</h4>
                                    <Divider/>
                                </div>

                                <div className="contact-title contact-list">
                                    <List>
                                        <ListItem primaryText="aliciafdezrov@gmail.com"
                                                  onClick={() => this.openLink("mailto:aliciafdezrov@gmail.com?subject=Petición%20desde%20cv")}
                                                  leftIcon={<FontIcon>mail</FontIcon>}>
                                        </ListItem>
                                    </List>

                                    <div style={{paddingTop: '1vh'}}>
                                        <a href="https://www.linkedin.com/in/alicia-fernández-rovira-70885811a"
                                           target="_blank">
                                            linkedin/alicia-fernández-rovira
                                        </a>
                                    </div>
                                    <div style={{paddingTop: '1vh'}}>
                                        <a href="https://github.com/aliciafdezrov"
                                           target="_blank">
                                            github.com/aliciafdezrov
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-title contact-text-div">
                                    <h4>Un poco más sobre mi</h4>
                                    <Divider/>
                                    <p>Llevo desde 2016 trabajando, primero con una beca compaginándolo con mis estudios
                                        y
                                        más tarde contratada.Desde ese momento he estado trabajando como Desarrolladora
                                        Full-Stack. Siempre participando activamente en el diseño, creación y gestión de
                                        bases de datos, backend y frontend.</p>
                                </div>
                            </div>

                            <div className="avatar-style">
                                <Avatar
                                    alt="Me"
                                    src={photo}
                                    className="avatar"
                                />
                            </div>
                        </Paper>
                    </div>
                </MobileView>
            </>
        );
    }
}