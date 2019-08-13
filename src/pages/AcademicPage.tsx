import * as React from "react";
import {Paper} from "react-md";
import Divider from "react-md/lib/Dividers";
import Steps, {Step} from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

export class AcademicPage extends React.Component<{}, {}> {
    public constructor(props) {
        super(props);
    }

    state = {
        currentStudiesStep: 0,
        currentProjectStep: 0,
    };

    public render() {
        return (
            <div className="central-div">
                <Paper className="title-paper" zDepth={2}>
                    <div>
                        <div className="academic-titles">
                            <h4>Estudios</h4>
                        </div>
                        <Divider/>
                        <Steps direction="vertical" current={this.state.currentStudiesStep}
                               onChange={(current) => this.setState({currentStudiesStep: current})}>
                            <Step title="Sept 2013 - Sept 2017"
                                  description="Grado Ingeniería de la Salud (Universidad de Málaga)"/>
                        </Steps>
                    </div>

                    <div>
                        <div className="academic-titles">
                            <h4>Proyectos académicos</h4>
                        </div>
                        <Divider/>
                        <Steps direction="vertical" current={this.state.currentProjectStep}
                               onChange={(current) => this.setState({currentProjectStep: current})}>
                            <Step
                                title="Seminario en optimización para la reconstrucción de redes génicas (Universidad de Málaga) (2015)"
                                description="Asistencia a un seminario proporcionado por la Universidad de Málaga 2015(3 meses)
                                                        Seminario realizado con una duración de tres meses relacionado con la optimización en la reconstrucción de redes génicas haciendo uso de metaheurística"/>

                            <Step title="Desarrollo de una aplicación Android (Universidad de Málaga) (2016)"
                                  description="Aplicación Android para pacientes con EPOC 2016(4 meses)
                                                    Se participó en el desarrollo de una aplicación Android destinada a mejorar la adhesión al tratamiento en paciente con Enfermedad Pulmonar Obstructiva Crónica (EPOC). Posteriormente se presentó dicha aplicación en el Reto Salud Andalucía."/>
                            <Step
                                title="Proyecto Innovación educativa en Biología y Ciencias Ómicas (Universidad de Málaga) (2016)"
                                description="Estudio sobre problemas de inferencia filogenética realizado para la Universidad de Málaga 2016(2 meses)"/>
                            <Step
                                title="Aplicación para la generación de mapas de calor (Universidad de Málaga) (2017-2018)"
                                description="Desarrollo de una aplicación iniciado a partir de un Proyecto de Investigación.
A partir de la Beca realizada surgió el diseño, desarrollo y mantenimiento de una aplicación destinada a la generación de mapas de calor a partir de datos de expresión génica para cualquier tipo de análisis clínico posterior a realizar."/>
                        </Steps>
                    </div>
                </Paper>
            </div>
        );
    }
}