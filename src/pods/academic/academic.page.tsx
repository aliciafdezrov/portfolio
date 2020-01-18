import * as React from "react";
import {useState} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import * as classes from "./academic.scss";
import {Divider, Steps} from "rsuite";
import {Animation, Reveal} from "react-genie";

export const AcademicPage = () => {
    const [currentStudiesStep, setCurrentStudiesStep] = useState(0);
    const [currentProjectStep, setCurrentProjectStep] = useState(0);
    const [currentLanguageStep, setCurrentLanguageStep] = useState(0);

    return (
        <>
            <BrowserView>
                <div className={classes.container}>
                    <div className={classes.card}>
                        <Reveal delay={100} animation={Animation.SlideInRight}>
                            <div>
                                <h4>Estudios</h4>
                                <Divider/>
                                <div className={classes.stepsStyle}>
                                    <Steps vertical current={currentStudiesStep}>
                                        <Steps.Item title={<h5 style={{color: 'white'}}>Máster Frontend UX (Lemoncode)</h5>}
                                                    onClick={() => setCurrentStudiesStep(0)}
                                                    description="Oct 2019 - Actualidad"/>
                                        <Steps.Item title={<h5 style={{color: 'white'}}>Grado Ingeniería de la Salud (Universidad de Málaga)</h5>}
                                                    onClick={() => setCurrentStudiesStep(1)}
                                                    description="Sept 2013 - Sept 2017"/>
                                    </Steps>
                                </div>
                            </div>
                        </Reveal>

                        <div>
                            <Reveal delay={200} animation={Animation.SlideInRight}>
                                <h4>Proyectos académicos</h4>
                                <Divider/>
                                <div className={classes.stepsStyle}>
                                    <Steps vertical current={currentProjectStep}>
                                        <Steps.Item
                                            onClick={() => setCurrentProjectStep(0)}
                                            title={<h5 style={{color: 'white'}}>Seminario en optimización para la
                                                reconstrucción de redes génicas (Universidad de Málaga) (2015)</h5>}
                                            description="Asistencia a un seminario proporcionado por la Universidad de Málaga 2015(3 meses)
                                                        Seminario realizado con una duración de tres meses relacionado con la optimización en la reconstrucción de redes génicas haciendo uso de metaheurística"/>

                                        <Steps.Item
                                            title={<h5 style={{color: 'white'}}>Desarrollo de una aplicación Android
                                                (Universidad de Málaga) (2016)</h5>}
                                            onClick={() => setCurrentProjectStep(1)}
                                            description="Aplicación Android para pacientes con EPOC 2016(4 meses)
                                                    Se participó en el desarrollo de una aplicación Android destinada a mejorar la adhesión al tratamiento en paciente con Enfermedad Pulmonar Obstructiva Crónica (EPOC). Posteriormente se presentó dicha aplicación en el Reto Salud Andalucía."/>
                                        <Steps.Item
                                            title={<h5 style={{color: 'white'}}>Proyecto Innovación educativa en
                                                Biología y Ciencias Ómicas (Universidad de Málaga) (2016)</h5>}
                                            onClick={() => setCurrentProjectStep(2)}
                                            description="Estudio sobre problemas de inferencia filogenética realizado para la Universidad de Málaga 2016(2 meses)"/>
                                        <Steps.Item
                                            title={<h5 style={{color: 'white'}}>Aplicación para la generación de
                                                mapas de calor (Universidad de Málaga) (2017-2018)</h5>}
                                            onClick={() => setCurrentProjectStep(3)}
                                            description="Desarrollo de una aplicación iniciado a partir de un Proyecto de Investigación.
A partir de la Beca realizada surgió el diseño, desarrollo y mantenimiento de una aplicación destinada a la generación de mapas de calor a partir de datos de expresión génica para cualquier tipo de análisis clínico posterior a realizar."/>
                                    </Steps>
                                </div>
                            </Reveal>
                        </div>

                        <div>
                            <Reveal delay={200} animation={Animation.SlideInRight}>
                                <h4>Idiomas</h4>
                                <Divider/>
                                <div className={classes.stepsStyle}>
                                    <Steps vertical current={currentLanguageStep}>
                                        <Steps.Item title={<h5 style={{color: 'white'}}>Español</h5>}
                                                    onClick={() => setCurrentLanguageStep(0)}
                                                    description="Lengua materna"/>

                                        <Steps.Item title={<h5 style={{color: 'white'}}>Inglés</h5>}
                                                    onClick={() => setCurrentLanguageStep(1)}
                                                    description="En proceso de obtención del certificado B2 de Cambridge"/>
                                    </Steps>
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
                                <Steps vertical current={currentStudiesStep}>
                                    <Steps.Item title={"Máster Frontend UX (Lemoncode)"}
                                                onClick={() => setCurrentStudiesStep(0)}/>
                                    <Steps.Item title="Grado Ingeniería de la Salud (Universidad de Málaga)"
                                                onClick={() => setCurrentStudiesStep(1)}/>
                                </Steps>
                            </div>
                        </div>

                        <div>
                            <h4>Proyectos académicos</h4>
                            <Divider/>
                            <div className={classes.stepsStyle}>
                                <Steps vertical current={currentProjectStep}>
                                    <Steps.Item
                                        onClick={() => setCurrentProjectStep(0)}
                                        title="Seminario en optimización para la
                                            reconstrucción de redes génicas (Universidad de Málaga) (2015)"/>

                                    <Steps.Item
                                        onClick={() => setCurrentProjectStep(1)}
                                        title="Desarrollo de una aplicación Android
                                            (Universidad de Málaga) (2016)"/>
                                    <Steps.Item
                                        onClick={() => setCurrentProjectStep(2)}
                                        title="Proyecto Innovación educativa en Biología
                                            y Ciencias Ómicas (Universidad de Málaga) (2016)"/>
                                    <Steps.Item
                                        onClick={() => setCurrentProjectStep(3)}
                                        title="Aplicación para la generación de mapas de
                                            calor (Universidad de Málaga) (2017-2018)"/>
                                </Steps>
                            </div>
                        </div>

                        <div>
                            <h4>Idiomas</h4>
                            <Divider/>
                            <div className={classes.stepsStyle}>
                                <Steps vertical current={currentLanguageStep}>
                                    <Steps.Item title="Español"
                                                onClick={() => setCurrentLanguageStep(0)}
                                                description="Lengua materna"/>

                                    <Steps.Item title="Inglés"
                                                onClick={() => setCurrentLanguageStep(1)}
                                                description="En proceso de obtención del certificado B2 de Cambridge"/>
                                </Steps>
                            </div>
                        </div>
                    </div>
                </div>
            </MobileView>
        </>
    );
}
