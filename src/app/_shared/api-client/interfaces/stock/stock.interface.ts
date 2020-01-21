export interface WareneingangArticleRequestInterface {
    search: string;
    category1Id: string;
    category2Id: string;
    category3Id: string;
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
