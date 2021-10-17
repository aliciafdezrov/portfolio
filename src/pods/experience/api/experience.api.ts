import {ExperienceApiInfo} from "./experience.api-model";

const filePath = require("../../../../assets/info.json");

export const getExperienceInfo = async (): Promise<ExperienceApiInfo> => {
    try {
        return fetch(filePath)
            .then(response => response.json())
            .then(json => json.experience);
    } catch (exception) {
        throw exception;
    }
};
