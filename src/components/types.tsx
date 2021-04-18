export interface ProjectDescription {
    name: string;
    description: string;
    link: string;
}

export interface ProjectPropType {
    description: ProjectDescription;
}

export interface EventDescription {
    name: string;
    date: string;
    time_from: string;
    time_to: string;
}
    
export interface EventPropType {
    description: EventDescription;
}

export interface BlogDescription {
	name: string;
	link: string;
	date: string;
}
