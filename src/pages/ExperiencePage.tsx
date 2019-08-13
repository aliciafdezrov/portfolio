import * as React from "react";
import {Paper} from "react-md";
import List from "react-md/lib/Lists";
import ExpansionPanel from "react-md/lib/ExpansionPanels";
import ExpansionList from "react-md/lib/ExpansionPanels/ExpansionList";

const uma = require("../../docs/avatars/logo-universidad-de-malaga.png");

export interface IPropsExperiencePage {
}

export interface IDispatchPropsExperiencePage {

}

export interface IStateExperiencePage {

}

export class ExperiencePage extends React.Component<IPropsExperiencePage & IDispatchPropsExperiencePage, IStateExperiencePage> {
    public constructor(props: IPropsExperiencePage & IDispatchPropsExperiencePage) {
        super(props);
    }

    state = {
        openItem: -1
    };

    private handleClick(value: number) {
        if (this.state.openItem === value) {
            this.setState(state => ({openItem: -1}));

        } else {
            this.setState(state => ({openItem: value}));
        }
    };

    public render() {
        return (
            <div>
                <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                    <ExpansionList>
                        <ExpansionPanel
                            footer={null}
                            label="Desarrollador Full-Stack (GSL)"
                            secondaryLabel="Abr 2018 - Actualidad">
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
                        </ExpansionPanel>

                        <ExpansionPanel
                            footer={null}
                            label="Desarrollador (Grupo AL)"
                            secondaryLabel="Ene 2017 - Abr 2018">
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
                        </ExpansionPanel>

                        <ExpansionPanel
                            footer={null}
                            label="Desarrollador de Big Data y metaheurística (Universidad de Málaga)"
                            secondaryLabel="Sept 2016 - Ene 2018">
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
                        </ExpansionPanel>
                    </ExpansionList>
                </div>
            </div>
        )
            ;
    }
}