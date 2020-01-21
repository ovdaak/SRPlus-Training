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
