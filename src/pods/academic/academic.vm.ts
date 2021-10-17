export interface AcademicItem {
    title: string;
    subtitle: string;
    description: string;
}

export const createInitialAcademicItem = (): AcademicItem => ({
    title: '',
    description: '',
    subtitle: ''
});

export interface AcademicInfo {
    languages: Array<AcademicItem>;
    degrees: Array<AcademicItem>;
    projects: Array<AcademicItem>;
}

export const createInitialAcademicInfo = (): AcademicInfo => ({
    languages: [],
    degrees: [],
    projects: [],
});
