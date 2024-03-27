export type ExperienceModel = {
    name: string;
    descriptions: {
        blurb: string;
    };
    links: {
        name: string;
        icon?: string;
        url: string;
    }[];
    image?: string;
    skills: string[];
    startDate: string;
    endDate: string;
};
