import * as React from "react";
import {useState} from "react";
import {AcademicPage, ContactPage, ExperiencePage, HomePage, KnowledgesPage, PDF} from "pods";
import {SwitchComponent} from "../components/switch.component";

export const MainScene = () => {
    const [activeIndex, setActiveIndex] = useState(5);
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
        </>
    );
}