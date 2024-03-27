import { ArticleModel } from "./article";
import { ExperienceModel } from "./experience";
import { ProjectModel } from "./project";

export type ContactModel = {
    icon: string;
    label: string;
    value: string;
    href?: string;
};

export type RootDataModel = {
    header: {
        profile_image: string;
        name: string;
        pronouns: string;
        summary_tags: string[];
        skills: {
            languages: string[];
            tools: string[];
            platforms: string[];
        };
        contact: ContactModel[];
    };
    sections: {
        about: any;
        projects: ProjectModel[];
        experience: ExperienceModel[];
        articles: ArticleModel[];
    };
};
