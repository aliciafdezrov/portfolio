import * as React from "react";
import Steps, {Step} from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import {Paper} from "react-md";


export class ExperiencePage extends React.Component<{}, {}> {
    public constructor(props) {
        super(props);
    }

    state = {
        currentStep: 0
    };

    public render() {
        return (
            <div className="central-div">
                <Paper className="title-paper" zDepth={2}>
                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <Steps direction="vertical" current={this.state.currentStep}
                               onChange={(current) => this.setState({currentStep: current})}>

                            <Step title="Desarrollador Full-Stack (GSL)"
                                  subtitle="[Abr 2018 - Actualidad]"
                                  description={
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
                                  }/>

                            <Step title="Desarrollador (Grupo AL)"
                                  subtitle="[Ene 2017 - Abr 2018]"
                                  description={
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
                                  }/>

                            <Step title="Desarrollador de Big Data y metaheurística (Universidad de Málaga)"
                                  subtitle="[Sept 2016 - Ene 2018]"
                                  description={
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
                                  }/>
                        </Steps>
                    </div>
                </Paper>
            </div>
        );
    }
}