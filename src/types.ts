export interface bank_holidays {
    id: string;
    name: string;
    date: Date;
    location: String;
}

export interface events_feed {
    title: string;
    id: string;
    author: string;
    name: string; //Author name;
    image: string; //Author image
    created_at: Date;
    category: string;
    location: string | null;
    picture: string | null; //Event picture
    description: string;
}

export interface absences_data {
    id: number;
    type: string; //TODO: Turn into enum;
    start: Date;
    finish: Date;
    employee_id: number;
    name: string;
}