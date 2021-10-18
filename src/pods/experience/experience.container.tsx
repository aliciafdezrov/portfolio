import * as React from "react";
import {ExperienceSection} from "./components/experience-section/experience-section.component";
import {createInitialExperienceInfo} from "./experience.vm";
import {useLoad} from "./experience.hooks";

export const ExperienceContainer = () => {
    const [experience, setExperience] = React.useState(createInitialExperienceInfo());
    const {onLoad} = useLoad({
        onLoadExperience: (vmExperience) => setExperience(vmExperience),
    });

    React.useEffect(() => {
        onLoad();
    }, []);

    return (
        <ExperienceSection experienceInfo={experience}/>
    )
};
