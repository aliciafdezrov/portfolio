import {ExperienceApiInfo} from "./experience.api-model";

const filePath = "../../../../assets/info.json"

export const getExperienceInfo = async (): Promise<ExperienceApiInfo> => {
    try {
        return fetch(filePath)
            .then(response => response.json())
            .then(json => json.experience);
    } catch (exception) {
        throw exception;
    }
};
