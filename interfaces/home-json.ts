export interface House {
    users:      User[];
    properties: Property[];
    favorite:   Favorite[];
}

export interface Favorite {
    id:           number;
    userId:       number;
    propertiesId: number;
}

export interface Property {
    id:               number;
    street:           string;
    number:           number;
    city:             string;
    province:         string;
    country:          string;
    status:           string;
    type:             string;
    description:      string;
    contact_mail:     string;
    contact_phone:    string;
    condition:        string;
    room:             number;
    bath:             number;
    size:             number;
    price:            number;
    pet:              boolean;
    garden:           boolean;
    air_conditioning: boolean;
    swimming_pool:    boolean;
    terrace:          boolean;
    publication_date: string;
}

export interface User {
    id:            number;
    email:         string;
    first_name:    string;
    last_name:     string;
    password:      string;
    creation_date: Date;
}
