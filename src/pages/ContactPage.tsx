import * as React from "react";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {Paper} from "react-md";
import {Avatar, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PlaceIcon from "@material-ui/icons/Place";

import {library} from '@fortawesome/fontawesome-svg-core';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGoogleDrive} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(faGoogleDrive, faLinkedin, faCalendar);

const photo = require("../../docs/avatars/download.jpeg")

export interface IPropsContactPage {
    intl?: ReactIntl.InjectedIntl;
}

export interface IDispatchPropsContactPage {

}

export interface IStateContactPage {

}

export class ContactPage extends React.Component<IPropsContactPage & IDispatchPropsContactPage & InjectedIntlProps, IStateContactPage> {
    public constructor(props: IPropsContactPage & IDispatchPropsContactPage & InjectedIntlProps) {
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
                                    <div className="contact-title">
                                        <Typography variant="title">
                                            Información de contacto
                                        </Typography>
                                    </div>
                                        <div className="contact-title">
                                            <List dense={true}>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <PhoneIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="666-666-666"
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <EmailIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="johnDoe@gmail.com"
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <a href="https://www.linkedin.com/in/alicia-fernández-rovira-70885811a"
                                                           target="_blank">
                                                            <FontAwesomeIcon
                                                                icon={['fab', 'linkedin']}
                                                                size="2x"
                                                                className={"icons-colors"}
                                                            />
                                                        </a>
                                                    </ListItemIcon>
                                                    <a href="https://www.linkedin.com/in/alicia-fernández-rovira-70885811a"
                                                       target="_blank">
                                                        <ListItemText
                                                            primary="https://www.linkedin.com/in/alicia-fernández-rovira-70885811a"
                                                        />
                                                    </a>
                                                </ListItem>
                                                <a href="https://www.google.es/maps/place/29012+M%C3%A1laga/@36.7279999,-4.4146106,17z/data=!3m1!4b1!4m5!3m4!1s0xd72f7c6c4d4df2b:0x1c03d27be17d4780!8m2!3d36.7279999!4d-4.4124219"
                                                   target="_blank">
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <PlaceIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Málaga, 29012 (Spain)"/>
                                                    </ListItem>
                                                </a>
                                            </List>
                                        </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <Avatar
                                        alt="Me"
                                        src={photo}
                                        className="avatar"
                                    />
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}