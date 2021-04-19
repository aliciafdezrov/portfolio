import * as React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import * as classes from "./contact.scss";
import {Divider, FlexboxGrid, Icon} from "rsuite";

const photo = require("../../../assets/avatars/photo2.webp");

export const ContactPage = () => {
    return (
        <>
            <BrowserView>
                <div className={classes.container}>
                    <div className={classes.wrapper}>
                        <div>
                            <div>
                                <h4>Un poco más sobre mi</h4>
                                <Divider/>
                                <p>Llevo desde 2016 formándome como desarrolladora. A lo largo de estos años he aprendido un poco más sobre que busco profesionalmente y estos son mis mandamientos:
                                    <ul>
                                        <li>Es enriquecedor trabajar con más gente, sobretodo cuando hay pautas y reglas que facilitan ese trabajo en equipo.</li>
                                        <li>Conocer la importancia de tener buenas pautas de programación pero también ser consciente de que no siempre se puede ser completamente estricto.</li>
                                        <li>Las reuniones diarias pueden acortar un atasco de 2 dias con una tarea a un par de horas con sólo 10 minutos de conversación. </li>
                                        <li>Las PR son necesarias, no sólo como revisión, sino para conocer código ajeno al tuyo. </li>
                                        <li>Tengo muchas más cosas que decir, por eso dejo mis datos de contacto por aquí... </li>
                                    </ul>
                                </p>
                            </div>

                            <br/>
                                <h4>Información de contacto</h4>
                                <FlexboxGrid align={"middle"}>
                                    <FlexboxGrid.Item colspan={3} className={classes.styleCenter}>
                                        <Icon icon={'at'} className={classes.listIcon}/>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={6} className={classes.styleCenter && classes.dataItem}>
                                        <div className={classes.titleStyle}>
                                            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Petición%20desde%20cv&to=aliciafdezrov@gmail.com&body=Cuerpo+del+mensaje"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                aliciafdezrov@gmail.com
                                            </a>
                                        </div>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>

                                <FlexboxGrid align={"middle"}>
                                    <FlexboxGrid.Item colspan={3} className={classes.styleCenter}>
                                        <Icon icon={'github-square'} className={classes.listIcon}/>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={6} className={classes.styleCenter && classes.dataItem}>
                                        <div className={classes.titleStyle}>
                                            <a href="https://github.com/aliciafdezrov"
                                               rel="noopener noreferrer"
                                               target="_blank">
                                                github.com/aliciafdezrov
                                            </a>
                                        </div>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>

                                <FlexboxGrid align={"middle"}>
                                    <FlexboxGrid.Item colspan={3} className={classes.styleCenter}>
                                        <Icon icon={'linkedin-square'} className={classes.listIcon}/>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={6} className={classes.styleCenter && classes.dataItem}>
                                        <div className={classes.titleStyle}>
                                            <a href="https://www.linkedin.com/in/alicia-fernández-rovira-70885811a"
                                               rel="noopener noreferrer"
                                               target="_blank">
                                                https://www.linkedin.com/in/alicia-fernández-rovira-70885811a
                                            </a>
                                        </div>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>
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
                        <div className={classes.contactTextDiv}>
                            <h4>Un poco más sobre mi</h4>
                            <Divider/>
                            <p>Llevo desde 2016 formándome como desarrolladora. A lo largo de estos años he aprendido un poco más sobre que busco profesionalmente y estos son mis mandamientos:
                                <ul>
                                    <li>Es enriquecedor trabajar con más gente, sobretodo cuando hay pautas y reglas que facilitan ese trabajo en equipo.</li>
                                    <li>Conocer la importancia de tener buenas pautas de programación pero también ser consciente de que no siempre se puede ser completamente estricto.</li>
                                    <li>Las reuniones diarias pueden acortar un atasco de 2 dias con una tarea a un par de horas con sólo 10 minutos de conversación. </li>
                                    <li>Las PR son necesarias, no sólo como revisión, sino para conocer código ajeno al tuyo. </li>
                                    <li>Tengo muchas más cosas que decir, por eso dejo mis datos de contacto por aquí... </li>
                                </ul>
                            </p>
                        </div>

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
                                               rel="noopener noreferrer"
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
                                               rel="noopener noreferrer"
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
                                               rel="noopener noreferrer"
                                               target="_blank">
                                                linkedin.com/aliciafdezrov
                                            </a>
                                        </div>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>
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
