import {AcademicApiInfo} from "./academic.api-model";

const filePath = "../../../../assets/info.json"

export const getAcademicInfo = async (): Promise<AcademicApiInfo> => {
    try {
        return fetch(filePath)
            .then(response => response.json())
            .then(json => json.academic);
    } catch (exception) {
        throw exception;
    }
};
