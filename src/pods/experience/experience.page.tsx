import * as React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import classes from './experience.scss';
import {Divider, Timeline} from "rsuite";

export const ExperiencePage = () => (
    <>
        <BrowserView>
            <div className={classes.container}>
                <div className={classes.card}>
                    <h4>Experiencia profesional</h4>
                    <Divider/>
                    <div className={classes.stepsStyle}>
                        <Timeline>
                            <Timeline.Item>
                                <h5 style={{color: 'white'}}>Desarrolladora Front-end en Itrs Group</h5>
                                <h6>[Feb 2020 - Actualidad]</h6>
                                <div className="paragraph">
                                    <p>
                                        Desarrollo front-end de herramientas de monitorización usando React, (con Redux
                                        en casos puntuales y necesarios) y javascript.
                                    </p>
                                </div>
                            </Timeline.Item>

                            <Timeline.Item>
                                <h5 style={{color: 'white'}}>Desarrolladora Full-Stack en GSL Servicios de
                                    Prevención</h5>
                                <h6>[Abr 2018 - Nov 2019]</h6>
                                <div className="paragraph">
                                    <p>
                                        Desarrollo de una aplicación web de gestión clínica. Desarrollo
                                        del
                                        sistema al completo incluyendo gestión de servidores usando
                                        Docker
                                        Swarm y de las bases de datos con el motor MySQL.
                                        <br/>

                                        Un backend y frontend diferenciados, usando en ambos casos
                                        JavaScript y Rest. El frontend se desarrolló usando React, Redux
                                        y Webpack. El
                                        backend usando nodeJS con un servidor express y webpack.
                                    </p>
                                </div>
                            </Timeline.Item>

                            <Timeline.Item>
                                <h5 style={{color: 'white'}}>Desarrolladora Full-Stack en Grupo AL</h5>
                                <h6>[Ene 2017 - Abr 2018]</h6>
                                <div className="paragraph">
                                    <p>
                                        Se han desarrollado proyectos en colaboración con el
                                        Ayuntamiento de Alicante. La creación de dichos proyectos tiene
                                        como objetivo la refactorización de servicios ya existentes del
                                        Portal de Administrinación Electrónica pudiendo migrar su uso a
                                        un entorno tecnológico más actualizado y accesible. Se migraron
                                        servicios SOAP a servicios REST haciendo uso de J2EE,
                                        autenticación con JWT, base de datos MySQL y gestión de
                                        certificados electrónicos en servidores de aplicaciones Wildfly.
                                        <br/>

                                        Además se realizaron tareas de DevOps, actualizando una
                                        plataforma de integración con Jenkins y creando un cliente web
                                        para un servicio REST destinado a posibilitar a cualquier
                                        desarrollador su uso sin conocimientos del funcionamiento
                                        interno de la misma.
                                    </p>
                                </div>
                            </Timeline.Item>

                            <Timeline.Item>
                                <h5 style={{color: 'white'}}>Desarrolladora Full-Stack en Universidad de Málaga</h5>
                                <h6>[Sept 2016 - Ene 2018]</h6>
                                <div className="paragraph">
                                    <p>
                                        Programador Full Stack perteneciente a un grupo de investigación
                                        en
                                        la Universidad de Málaga en el equipo de desarrollo.
                                        <br/>

                                        El trabajo se organizó utilizando Scrum como puesta en práctica
                                        de
                                        las metodologías de desarrollo ágiles.
                                        <br/>

                                        La participación se ha realizado a lo largo de diferentes
                                        proyectos
                                        creando la arquitectura de los mismo desde cero. Todos los
                                        proyectos
                                        han estado orientados a su desarrollo haciendo uso de patrones
                                        de
                                        diseño, arquitecturas J2EE y orientados a microservicios
                                        garantizamdo la
                                        eficiencia y estabilidad de los mismos.
                                        <br/>

                                        Los proyectos se han desarrollado realizando una diferenciación
                                        entre el back-end y el front-end con la interacción conjunta
                                        entre ambos
                                        permitiendo un mayor grado de control sobre ambas. Además se
                                        orientaron realizando un control de versiones con Git, una
                                        virtualización de
                                        los sistemas usando Docker y una perspectiva de integración
                                        continua.
                                        <br/>

                                        Se ha hecho uso de diferentes tecnologías y herramientas como
                                        Apache
                                        Spark, React o Redux para producir aplicaciones webs que
                                        realizasen
                                        el análisis de grandes volúmenes de datos.
                                    </p>
                                </div>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        </BrowserView>
        <MobileView>
            <div className={classes.container}>
                <div className={classes.card}>
                    <div className="academic-titles">
                        <h4>Experiencia profesional</h4>
                    </div>
                    <Divider/>

                    <div className={classes.stepsStyle}>
                        <Timeline>

                            <Timeline.Item>
                                <h5 style={{color: 'white'}}>Desarrolladora Front-end en Itrs Group</h5>
                                <h6>[Feb 2020 - Actualidad]</h6>
                            </Timeline.Item>

                            <Timeline.Item>
                                <h5 style={{color: 'white'}}>Desarrolladora Full-Stack en GSL Servicio de
                                    Prevención</h5>
                                <h6>[Abr 2018 - Nov 2019]</h6>
                            </Timeline.Item>

                            <Timeline.Item>
                                <h5 style={{color: 'white'}}>Desarrolladora Full-Stack en Grupo AL</h5>
                                <h6>[Ene 2017 - Abr 2018]</h6>
                            </Timeline.Item>

                            <Timeline.Item>
                                <h5 style={{color: 'white'}}>Desarrolladora Full-Stack en la Universidad de Málaga</h5>
                                <h6>[Sept 2016 - Ene 2018]</h6>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        </MobileView>
    </>
);
