import * as React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import * as classes from "./contact.scss";
import {Divider, FlexboxGrid, Icon, List} from "rsuite";

const photo = require("../../../assets/avatars/photo.jpg");

export const ContactPage = () => {
    return (
        <>
            <BrowserView>
                <div className={classes.container}>
                    <div className={classes.wrapper}>
                        <div>
                            <h4>Información de contacto</h4>
                            <List>
                                <List.Item key={0} index={0}>
                                    <FlexboxGrid>
                                        {/*icon*/}
                                        <FlexboxGrid.Item colspan={2} className={classes.styleCenter}>
                                            <Icon icon={'at'} className={classes.listIcon}/>
                                        </FlexboxGrid.Item>
                                        {/*base info*/}
                                        <FlexboxGrid.Item colspan={6}
                                                          className={classes.styleCenter && classes.dataItem}>
                                            <div className={classes.titleStyle}>
                                                <a
                                                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Petición%20desde%20cv&to=aliciafdezrov@gmail.com&body=Cuerpo+del+mensaje"
                                                    target="_blank">
                                                    aliciafdezrov@gmail.com
                                                </a>
                                            </div>
                                        </FlexboxGrid.Item>
                                    </FlexboxGrid>
                                </List.Item>

                                <List.Item key={1} index={1}>
                                    <FlexboxGrid>
                                        {/*icon*/}
                                        <FlexboxGrid.Item colspan={2} className={classes.styleCenter}>
                                            <Icon icon={'github-square'} className={classes.listIcon}/>
                                        </FlexboxGrid.Item>
                                        {/*base info*/}
                                        <FlexboxGrid.Item colspan={6}
                                                          className={classes.styleCenter && classes.dataItem}>
                                            <div className={classes.titleStyle}>
                                                <a href="https://github.com/aliciafdezrov"
                                                   target="_blank">
                                                    github.com/aliciafdezrov
                                                </a>
                                            </div>
                                        </FlexboxGrid.Item>
                                    </FlexboxGrid>
                                </List.Item>

                                <List.Item key={2} index={2}>
                                    <FlexboxGrid>
                                        {/*icon*/}
                                        <FlexboxGrid.Item colspan={2} className={classes.styleCenter}>
                                            <Icon icon={'linkedin-square'} className={classes.listIcon}/>
                                        </FlexboxGrid.Item>
                                        {/*base info*/}
                                        <FlexboxGrid.Item colspan={6}
                                                          className={classes.styleCenter && classes.dataItem}>
                                            <div className={classes.titleStyle}>
                                                <a href="https://www.linkedin.com/in/alicia-fernández-rovira-70885811a"
                                                   target="_blank">
                                                    https://www.linkedin.com/in/alicia-fernández-rovira-70885811a
                                                </a>
                                            </div>
                                        </FlexboxGrid.Item>
                                    </FlexboxGrid>
                                </List.Item>
                            </List>
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
                        </div>

                        <div className={classes.avatar}>
                            <img
                                alt="Me"
                                src={photo}
                            />
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className={classes.container}>
                    <div className={classes.wrapper}>
                        <div>
                            <h4>Información de contacto</h4>

                            <Divider/>
                            <div>
                                <FlexboxGrid>
                                    <FlexboxGrid.Item colspan={3} className={classes.styleCenter}>
                                        <Icon icon={'at'} className={classes.listIcon}/>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={6} className={classes.styleCenter && classes.dataItem}>
                                        <div className={classes.titleStyle}>
                                            <a href="mailto:aliciafdezrov@gmail.com?subject=Petición%20desde%20cv"
                                               target="_blank">
                                                aliciafdezrov@gmail.com
                                            </a>
                                        </div>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>

                                <FlexboxGrid>
                                    <FlexboxGrid.Item colspan={3} className={classes.styleCenter}>
                                        <Icon icon={'github-square'} className={classes.listIcon}/>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={6} className={classes.styleCenter && classes.dataItem}>
                                        <div className={classes.titleStyle}>
                                            <a href="https://github.com/aliciafdezrov"
                                               target="_blank">
                                                github.com/aliciafdezrov
                                            </a>
                                        </div>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>

                                <FlexboxGrid>
                                    <FlexboxGrid.Item colspan={3} className={classes.styleCenter}>
                                        <Icon icon={'linkedin-square'} className={classes.listIcon}/>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={6} className={classes.styleCenter && classes.dataItem}>
                                        <div className={classes.titleStyle}>
                                            <a href="https://www.linkedin.com/in/alicia-fernández-rovira-70885811a"
                                               target="_blank">
                                                linkedin.com/alicia-fernández-rovira
                                            </a>
                                        </div>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>
                            </div>
                            {/*<List size='sm' bordered={false}>
								<List.Item key={0} index={0}>
									<FlexboxGrid>
										icon
										<FlexboxGrid.Item colspan={3} className={classes.styleCenter}>
											<Icon icon={'at'} className={classes.listIcon}/>
										</FlexboxGrid.Item>
										base info
										<FlexboxGrid.Item colspan={6} className={classes.styleCenter && classes.dataItem}>
											<div className={classes.titleStyle}>
												<a href="mailto:aliciafdezrov@gmail.com?subject=Petición%20desde%20cv"
													 target="_blank">
													aliciafdezrov@gmail.com
												</a>
											</div>
										</FlexboxGrid.Item>
									</FlexboxGrid>
								</List.Item>

								<List.Item key={0} index={0}>
									<FlexboxGrid>
										icon
										<FlexboxGrid.Item colspan={3} className={classes.styleCenter}>
											<Icon icon={'github-square'} className={classes.listIcon}/>
										</FlexboxGrid.Item>
										base info
										<FlexboxGrid.Item colspan={6} className={classes.styleCenter && classes.dataItem}>
											<div className={classes.titleStyle}>
												<a href="https://github.com/aliciafdezrov"
													 target="_blank">
													github.com/aliciafdezrov
												</a>
											</div>
										</FlexboxGrid.Item>
									</FlexboxGrid>
								</List.Item>

								<List.Item key={0} index={0}>
									<FlexboxGrid>
										icon
										<FlexboxGrid.Item colspan={3} className={classes.styleCenter}>
											<Icon icon={'linkedin-square'} className={classes.listIcon}/>
										</FlexboxGrid.Item>
										base info
										<FlexboxGrid.Item colspan={6} className={classes.styleCenter && classes.dataItem}>
											<div className={classes.titleStyle}>
												<a href="https://www.linkedin.com/in/alicia-fernández-rovira-70885811a"
													 target="_blank">
													linkedin.com/alicia-fernández-rovira
												</a>
											</div>
										</FlexboxGrid.Item>
									</FlexboxGrid>
								</List.Item>
							</List>*/}

                            <div className={classes.contactTextDiv}>
                                <h4>Un poco más sobre mi</h4>
                                <Divider/>
                                <p>Llevo desde 2016 trabajando, primero con una beca compaginándolo con mis estudios
                                    y
                                    más tarde contratada.Desde ese momento he estado trabajando como Desarrolladora
                                    Full-Stack. Siempre participando activamente en el diseño, creación y gestión de
                                    bases de datos, backend y frontend.</p>
                            </div>
                        </div>

                        <div className={classes.avatar}>
                            <img
                                alt="Me"
                                src={photo}
                            />
                        </div>
                    </div>
                </div>
            </MobileView>
        </>
    );
}
