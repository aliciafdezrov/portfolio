export interface ExperienceApiItem {
    role: string;
    description: string;
    date: string;
    company: string;
}

export const createInitialExperienceApiItem = (): ExperienceApiItem => ({
    role: '',
    description: '',
    date: '',
    company: ''
});

export interface ExperienceApiInfo {
    jobs: Array<ExperienceApiItem>;
}

export const createInitialExperienceApiInfo = (): ExperienceApiInfo => ({
    jobs: [],
});
