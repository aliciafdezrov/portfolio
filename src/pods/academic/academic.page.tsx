import * as React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import * as classes from "./academic.scss";
import {Divider, Timeline} from "rsuite";
import {Animation, Reveal} from "react-genie";

export const AcademicPage = () => (
    <>
        <BrowserView>
            <div className={classes.container}>
                <div className={classes.card}>
                    <Reveal delay={100} animation={Animation.SlideInRight}>
                        <div>
                            <h4>Estudios</h4>
                            <Divider/>
                            <div className={classes.stepsStyle}>
                                <Timeline>
                                    <Timeline.Item>
                                        <h5 style={{color: 'white'}}>Máster Frontend UX (Lemoncode)</h5>
                                        <p>Oct 2019 - Actualidad</p>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <h5 style={{color: 'white'}}>Grado Ingeniería de la Salud (Universidad de
                                            Málaga)</h5>
                                        <p>Sept 2013 - Sept 2017</p>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                        </div>
                    </Reveal>

                    <div>
                        <Reveal delay={200} animation={Animation.SlideInRight}>
                            <h4>Proyectos académicos</h4>
                            <Divider/>
                            <div className={classes.stepsStyle}>
                                <Timeline>
                                    <Timeline.Item>
                                        <h5 style={{color: 'white'}}>Seminario en optimización para la
                                            reconstrucción de redes génicas (Universidad de Málaga) (2015)</h5>
                                        <p>Asistencia a un seminario proporcionado por la Universidad de Málaga 2015(3
                                            meses)
                                            Seminario realizado con una duración de tres meses relacionado con la
                                            optimización en la reconstrucción de redes génicas haciendo uso de
                                            metaheurística</p>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <h5 style={{color: 'white'}}>Desarrollo de una aplicación Android
                                            (Universidad de Málaga) (2016)</h5>
                                        <p>Aplicación Android para pacientes con EPOC 2016(4 meses)
                                            Se participó en el desarrollo de una aplicación Android destinada a
                                            mejorar la adhesión al tratamiento en paciente con Enfermedad Pulmonar
                                            Obstructiva Crónica (EPOC). Posteriormente se presentó dicha aplicación en
                                            el Reto Salud Andalucía.</p>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <h5 style={{color: 'white'}}>Proyecto Innovación educativa en
                                            Biología y Ciencias Ómicas (Universidad de Málaga) (2016)</h5>
                                        <p>Estudio sobre problemas de inferencia filogenética realizado para la
                                            Universidad de Málaga 2016(2 meses)</p>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <h5 style={{color: 'white'}}>Aplicación para la generación de
                                            mapas de calor (Universidad de Málaga) (2017-2018)</h5>
                                        <p>Desarrollo de una aplicación iniciado a partir de un Proyecto de
                                            Investigación.
                                            A partir de la Beca realizada surgió el diseño, desarrollo y mantenimiento
                                            de una aplicación destinada a la generación de mapas de calor a partir de
                                            datos de expresión génica para cualquier tipo de análisis clínico
                                            posterior a realizar.</p>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                        </Reveal>
                    </div>

                    <div>
                        <Reveal delay={200} animation={Animation.SlideInRight}>
                            <h4>Idiomas</h4>
                            <Divider/>
                            <div className={classes.stepsStyle}>
                                <Timeline>
                                    <Timeline.Item>
                                        <h5 style={{color: 'white'}}>Español</h5>
                                        <p>Lengua materna</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        <h5 style={{color: 'white'}}>Inglés</h5>
                                        <p>Nivel B2 (Cambridge)</p>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </BrowserView>
        <MobileView>
            <div className={classes.container}>
                <div className={classes.card}>
                    <div>
                        <h4>Estudios</h4>
                        <Divider/>
                        <div className={classes.stepsStyle}>
                            <Timeline>
                                <Timeline.Item>
                                    <h5 style={{color: 'white'}}>Máster Frontend UX (Lemoncode)</h5>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <h5 style={{color: 'white'}}>Grado Ingeniería de la Salud (Universidad de
                                        Málaga)</h5>
                                </Timeline.Item>
                            </Timeline>
                        </div>
                    </div>

                    <div>
                        <h4>Proyectos académicos</h4>
                        <Divider/>
                        <div className={classes.stepsStyle}>
                            <Timeline>
                                <Timeline.Item>
                                    <h5 style={{color: 'white'}}>Seminario en optimización para la
                                        reconstrucción de redes génicas (Universidad de Málaga) (2015)</h5>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <h5 style={{color: 'white'}}>Desarrollo de una aplicación Android
                                        (Universidad de Málaga) (2016)</h5>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <h5 style={{color: 'white'}}>Proyecto Innovación educativa en Biología
                                        y Ciencias Ómicas (Universidad de Málaga) (2016)</h5>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <h5 style={{color: 'white'}}>Aplicación para la generación de mapas de
                                        calor (Universidad de Málaga) (2017-2018)</h5>
                                </Timeline.Item>
                            </Timeline>
                        </div>
                    </div>

                    <div>
                        <h4>Idiomas</h4>
                        <Divider/>
                        <div className={classes.stepsStyle}>
                            <Timeline>
                                <Timeline.Item>
                                    <h5 style={{color: 'white'}}>Español</h5>
                                    <p>Lengua materna</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <h5 style={{color: 'white'}}>Inglés</h5>
                                    <p>Nivel B2 (Cambridge)</p>
                                </Timeline.Item>
                            </Timeline>
                        </div>
                    </div>
                </div>
            </div>
        </MobileView>
    </>
);
