export type ArticleModel = {
    name: string;
    descriptions: {
        blurb: string;
        writeupUrl?: string;
    };
    links: {
        name: string;
        icon?: string;
        url: string;
    }[];
    image?: string;
};
