export interface WareneingangInstituteRequestInterface {
    room: string;
}

export interface WareneingangInstituteInterface {
    id: number;
    name: string;
}

export interface WareneingangInstituteResponseInterface {
    institutes: WareneingangInstituteInterface[];
}
