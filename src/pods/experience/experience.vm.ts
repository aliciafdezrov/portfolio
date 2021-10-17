export interface ExperienceItem {
    title: string;
    subtitle: string;
    description: string;
}

export const createInitialExperienceItem = (): ExperienceItem => ({
    title: '',
    subtitle: '',
    description: '',
});

export interface ExperienceInfo {
    jobs: Array<ExperienceItem>;
}

export const createInitialExperienceInfo = (): ExperienceInfo => ({
    jobs: [],
});
