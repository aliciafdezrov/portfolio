import React from "react";
import {createInitialExperienceInfo, ExperienceInfo} from "./experience.vm";
import * as api from './api';
import {ExperienceApiInfo} from './api';
import {mapApiExperienceToExperience} from "./experience.mapper";

interface Props {
    onLoadExperience: (vmExperience: ExperienceInfo) => void;
}

export const useLoad = (props: Props) => {

    const handleLoadExperience = React.useCallback(async () => {
        try {
            let vmExperience: ExperienceInfo;
            const apiExperience: ExperienceApiInfo = await api.getExperienceInfo();
            vmExperience = mapApiExperienceToExperience(apiExperience);
            props.onLoadExperience(vmExperience);
        } catch (error) {
            return createInitialExperienceInfo();
        }
    }, []);

    return {
        onLoad: handleLoadExperience,
    };
};
