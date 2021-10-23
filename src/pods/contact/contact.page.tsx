import * as React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import Divider from "rsuite/Divider";
import "rsuite/Divider/styles/index.less";
import FlexboxGrid from "rsuite/FlexboxGrid";
import "rsuite/FlexboxGrid/styles/index.less";
import EmailIcon from '@rsuite/icons/Email';
import * as GithubSquare from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import * as LinkedinSquare from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import classes from "./contact.scss";

const photo = require("../../../assets/avatars/photo2.webp");

const FaSvgIcon = ({faIcon, ...rest}) => {
    const {width, height, svgPathData} = faIcon;
    return (
        <svg {...rest} viewBox={`0 0 ${width} ${height}`} width="1em" height="1em" fill="currentColor">
            <path d={svgPathData}></path>
        </svg>
    );
};

export const ContactPage = () => {
    return (
        <>
            <BrowserView>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h4>Un poco más sobre mi</h4>
                        <Divider/>
                    </div>
                    <div className={classes.main}>
                        <h6>
                            Llevo trabajando como desarrolladora desde 2018, aunque siempre he trabajado como FullStack
                            actualmente mi posición es como desarrolladora Frontend. Sin embargo, al tener experience
                            como desarrolladora FullStack,
                            entiendo como funciona un backend y no me importa trabajar ocasionalmente como
                            desarrolladora backend
                            aunque el frontend es mi pasión.
                            <br/>
                            <br/>
                            Me gustaría un rol que me permitiese crecer como desarrolladora sin estar atada a ninguna
                            tecnología ya que creo que es la mejor forma
                            para formarme continuamente profesionalmente. Conozco la importancia de tener buenas pautas
                            de programación pero también
                            soy consciente de que no siempre se puede ser completamente estricto respecto a la forma de
                            proceder.
                            <br/>
                            <br/>
                            Estoy acostumbrada y prefiero trabajar formando equipo ya que siempre ha sido beneficioso
                            para compartir conocimientos con mis compañeros. Tengo muchas más cosas que compartir, por
                            eso dejo mis datos de contacto por aquí...
                        </h6>
                    </div>

                    <div className={classes.contact}>
                        <table>
                            <caption>Información de contacto</caption>
                            <tbody>
                            <tr>
                                <th>
                                    <EmailIcon className={classes.listIcon}/>
                                </th>
                                <th className={classes.styleCenter && classes.dataItem}>
                                    <div className={classes.titleStyle}>
                                        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Petición%20desde%20cv&to=aliciafdezrov@gmail.com&body=Cuerpo+del+mensaje"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            aliciafdezrov@gmail.com
                                        </a>
                                    </div>
                                </th>
                            </tr>

                            <tr>
                                <th>
                                    <FaSvgIcon faIcon={GithubSquare} className={classes.listIcon}/>
                                </th>
                                <th className={classes.styleCenter && classes.dataItem}>
                                    <div className={classes.titleStyle}>
                                        <a href="https://github.com/aliciafdezrov"
                                           rel="noopener noreferrer"
                                           target="_blank">
                                            github.com/aliciafdezrov
                                        </a>
                                    </div>
                                </th>
                            </tr>

                            <tr>
                                <th>
                                    <FaSvgIcon faIcon={LinkedinSquare} className={classes.listIcon}/>
                                </th>
                                <th className={classes.styleCenter && classes.dataItem}>
                                    <div className={classes.titleStyle}>
                                        <a href="https://www.linkedin.com/in/alicia-fernández-rovira-70885811a"
                                           rel="noopener noreferrer"
                                           target="_blank">
                                            https://www.linkedin.com/in/alicia-fernández-rovira-70885811a
                                        </a>
                                    </div>
                                </th>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={classes.avatar}>
                        <img
                            alt="Me"
                            src={photo}
                        />
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className={classes.container}>
                    <div className={classes.wrapper}>
                        <div className={classes.contactTextDiv}>
                            <h4>Un poco más sobre mi</h4>
                            <Divider/>
                            <h6>
                                Llevo trabajando como desarrolladora desde 2018, aunque siempre he trabajado como
                                FullStack
                                actualmente mi posición es como desarrolladora Frontend. Sin embargo, al tener
                                experience
                                como desarrolladora FullStack,
                                entiendo como funciona un backend y no me importa trabajar ocasionalmente como
                                desarrolladora backend
                                aunque el frontend es mi pasión.
                                <br/>
                                <br/>
                                Me gustaría un rol que me permitiese crecer como desarrolladora sin estar atada a
                                ninguna
                                tecnología ya que creo que es la mejor forma
                                para formarme continuamente profesionalmente. Conozco la importancia de tener buenas
                                pautas
                                de programación pero también
                                soy consciente de que no siempre se puede ser completamente estricto respecto a la forma
                                de
                                proceder.
                                <br/>
                                <br/>
                                Estoy acostumbrada y prefiero trabajar formando equipo ya que siempre ha sido
                                beneficioso
                                para compartir conocimientos con mis compañeros. Tengo muchas más cosas que compartir,
                                por
                                eso dejo mis datos de contacto por aquí...
                            </h6>
                        </div>

                        <div>
                            <h4>Información de contacto</h4>

                            <Divider/>
                            <div>
                                <FlexboxGrid>
                                    <FlexboxGrid.Item colspan={3} className={classes.styleCenter}>
                                        <EmailIcon className={classes.listIcon}/>
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
                                        <FaSvgIcon faIcon={GithubSquare} className={classes.listIcon}/>
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
                                        <FaSvgIcon faIcon={LinkedinSquare} className={classes.listIcon}/>
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
    )
        ;
}
