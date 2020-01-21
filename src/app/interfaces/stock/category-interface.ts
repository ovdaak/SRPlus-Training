export interface WareneingangCategoryRequestInterface {
    parentId: number;
}

export interface WareneingangCategoryInterface {
    id: number;
    name: string;
    // Optional - wird nur benötigt, wenn alle Kategorien mit 1 Request komplett geladen werden
    parentId: number;
    // Optional - wird nur benötigt, wenn alle Kategorien mit 1 Request komplett geladen werden
    level: number;
}

export interface WareneingangCategoryResponseInterface {
    categories: WareneingangCategoryInterface[];
}

export interface WareneingangCategoryPropertiesRequestInterface {
    categoryId: number;
}

export interface WareneingangCategoryPropertiesResponseInterface {
    id: number;
    name: string;
    // Definiert Input, Cobobox oder Select-Dialog/Screen
    fieldTypeId: number;
    selectEventId: number;
    // Flag: Wert kann per Scanner gelesen werden
    scanAble: boolean;
    // Optional, nur für Typ Combobox relevant
    options?: [{
        id: number;
        name: string;
    }];
}
