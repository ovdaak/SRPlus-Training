export interface WareneingangArticleRequestInterface {
    search: string;
    category1Id: number;
    category2Id: number;
    category3Id: number;
}

export interface WareneingangArticleInterface {
    id: number;
    name: string;
    description: string;
    // Wird für die Ermittlung der Asset-Eigenschaften benötigt
    catgoryId: number;
}

export interface WareneingangArticleResponseInterface {
    stock: WareneingangArticleInterface[];
}

export interface WareneingangPhasesResponseInterface {
    id: number;
    name: string;
}

export interface WareneingangLocationsRequestInterface {
    room: string;
}

export interface WareneingangLocationsResponseInterface {
    id: number;
    name: string;
}

export interface WareneingangInstituteRequestInterface {
    room: string;
}

export interface WareneingangInstituteResponseInterface {
    id: number;
    name: string;
}
