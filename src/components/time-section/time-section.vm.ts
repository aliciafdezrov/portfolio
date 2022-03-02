export interface TimeSectionItem {
    title: string;
    subtitle: string;
    description: string;
}

export interface TimeSection {
    title: string;
    items: Array<TimeSectionItem>;
}
