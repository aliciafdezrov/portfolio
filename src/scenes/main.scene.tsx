import * as React from "react";
import {useState} from "react";
import {AcademicPage, ContactPage, DashboardPage, ExperiencePage, HomePage, KnowledgesPage, PDF} from "pods";
import {FontIcon} from "react-md";
import {SwitchComponent} from "../components/switch.component";

const themes = ['home', 'academic', 'experience', 'knowledge', 'contact', 'cv'];

export const MainScene = () => {
    const [activeIndex, setActiveIndex] = useState(4);
    const [transition, setTransition] = useState('slide-forward');

    function onChangeIndex(newIndex) {
        if (activeIndex < newIndex) {
            setTransition('slide-forward');
        } else {
            setTransition('slide-reverse');
        }

        setTimeout(() => {
            setActiveIndex(newIndex);
        }, 0);
    }

    return (
        <>
            <SwitchComponent components={[
                <HomePage key="home"/>,
                <AcademicPage key="academic"/>,
                <ExperiencePage key="experience"/>,
                <KnowledgesPage key="knowledge"/>,
                <ContactPage key="contact"/>,
                <PDF key="cv"/>
            ]} index={activeIndex} transition={transition}/>

            {/*<DashboardPage theme={`bottom-navigations-dynamic--${themes[activeIndex]}`}
                           activeIndex={activeIndex}
                           links={[{
                               label: 'Home',
                               icon: <FontIcon>home</FontIcon>,
                           }, {
                               label: 'Académico',
                               icon: <FontIcon>school</FontIcon>,
                           }, {
                               label: 'Experiencia',
                               icon: <FontIcon>laptop</FontIcon>,
                           }, {
                               label: 'Tecnologías',
                               icon: <FontIcon>star_border</FontIcon>,
                           }, {
                               label: 'Sobre mi',
                               icon: <FontIcon>person_outline</FontIcon>,
                           }, {
                               label: 'Descarga',
                               icon: <FontIcon>cloud_download</FontIcon>,
                           }]}
                           setActiveIndex={onChangeIndex.bind(this)}/>*/}
        </>
    );
}