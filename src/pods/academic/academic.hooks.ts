import React from "react";
import * as api from "./api";
import {AcademicApiInfo} from "./api";
import {AcademicInfo, createInitialAcademicInfo} from "./academic.vm";
import {mapApiAcademicToAcademic} from "./academic.mapper";

interface Props {
    onLoadAcademic: (vmAcademic: AcademicInfo) => void;
}

export const useLoad = (props: Props) => {

    const handleLoadAcademic = React.useCallback(async () => {
        try {
            let vmAcademic: AcademicInfo;
            const apiAcademic: AcademicApiInfo = await api.getAcademicInfo();
            vmAcademic = mapApiAcademicToAcademic(apiAcademic);
            props.onLoadAcademic(vmAcademic);
        } catch (error) {
            return createInitialAcademicInfo();
        }
    }, []);

    return {
        onLoad: handleLoadAcademic,
    };
};
