export interface AcademicApiItem {
    name: string;
    description: string;
    date: string;
    location: string;
}

export const createInitialAcademicApiItem = (): AcademicApiItem => ({
    name: '',
    description: '',
    date: '',
    location: ''
});

export interface AcademicApiInfo {
    languages: Array<AcademicApiItem>;
    projects: Array<AcademicApiItem>;
    degrees: Array<AcademicApiItem>;
}

export const createInitialAcademicApiInfo = (): AcademicApiInfo => ({
    languages: [],
    projects: [],
    degrees: []
});
