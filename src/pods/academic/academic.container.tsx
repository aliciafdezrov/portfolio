import * as React from "react";
import {AcademicSection} from "./components/academic-section/academic-section.component";
import {createInitialAcademicInfo} from "./academic.vm";
import {useLoad} from "./academic.hooks";

export const AcademicContainer = () => {
    const [academic, setAcademic] = React.useState(createInitialAcademicInfo());
    const {onLoad} = useLoad({
        onLoadAcademic: (vmAcademic) => setAcademic(vmAcademic),
    });

    React.useEffect(() => {
        onLoad();
    }, []);

    return (
        <AcademicSection academicInfo={academic}/>
    )
};
