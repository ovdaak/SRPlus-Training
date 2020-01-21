export interface WareneingangLocationsRequestInterface {
    room: string;
}

export interface WareneingangLocationsInterface {
    id: number;
    name: string;
}

export interface WareneingangLocationsResponseInterface {
    locations: WareneingangLocationsInterface[];
}
