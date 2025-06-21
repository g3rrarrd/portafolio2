export interface SocialProps {
    name: string;
    url: string;
    icon: string;
}

export interface CertificacionesProps {
    title: string;
    period: string;
}

export interface ExperienceProps {
    title : string;
    experience: string;
}

export interface EducationProps {
    title: String;
    place: String;
    period: String;
}

export interface CardIndexProps {
    title: string;
    description: string;
}

export interface ItemProps {
    titleEs: string;
    titleEn: string;
    href: string;
    subitems?: ItemProps[];
}

interface Skill {
    name: string;
    level: number;
}

export interface Skills {
    [categoria: string]: Skill[];
}

export interface proyectos {
    title: string;
    period: string;
    link : string;
    description: string;
    technologies: string[];
  }