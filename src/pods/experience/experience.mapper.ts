import {
    createInitialExperienceInfo,
    createInitialExperienceItem,
    ExperienceInfo,
    ExperienceItem
} from "./experience.vm";
import {ExperienceApiInfo, ExperienceApiItem} from "./api/experience.api-model";

export const mapExperienceItemApiToExperienceItem = (item: ExperienceApiItem): ExperienceItem => {
    const experienceItem = createInitialExperienceItem();
    experienceItem.title = `${item.role} (${item.company})`;
    experienceItem.subtitle = item.date;
    experienceItem.description = item.description;
    return experienceItem;
};

export const mapApiExperienceToExperience = (data: ExperienceApiInfo): ExperienceInfo => {
    const experienceInfo: ExperienceInfo = createInitialExperienceInfo();
    experienceInfo.jobs = data.jobs.map(mapExperienceItemApiToExperienceItem);
    return experienceInfo;
};
