export interface TimeSectionItem {
    title: string;
    subtitle: string;
    description: string;
}

export const createInitialTimeSectionItem = (): TimeSectionItem => ({
    title: '',
    description: '',
    subtitle: ''
});

export interface TimeSection {
    title: string;
    items: Array<TimeSectionItem>;
}

export const createInitialTimeSection = (): TimeSection => ({
    items: [],
    title: ''
});
