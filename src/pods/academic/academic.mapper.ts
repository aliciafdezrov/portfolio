import {AcademicApiInfo, AcademicApiItem} from "./api/academic.api-model";
import {AcademicInfo, AcademicItem, createInitialAcademicInfo, createInitialAcademicItem} from "./academic.vm";

export const mapAcademicItemApiToAcademicItem = (item: AcademicApiItem): AcademicItem => {
    const academicItem = createInitialAcademicItem();
    academicItem.title = `${item.name}`;
    if (item.location) {
        academicItem.title += ` (${item.location})`;
    }
    academicItem.subtitle = item.date;
    academicItem.description = item.description;
    return academicItem;
};

export const mapApiAcademicToAcademic = (data: AcademicApiInfo): AcademicInfo => {
    const academicInfo: AcademicInfo = createInitialAcademicInfo();
    academicInfo.degrees = data.degrees.map(mapAcademicItemApiToAcademicItem);
    academicInfo.languages = data.languages.map(mapAcademicItemApiToAcademicItem);
    academicInfo.projects = data.projects.map(mapAcademicItemApiToAcademicItem);
    return academicInfo;
};
