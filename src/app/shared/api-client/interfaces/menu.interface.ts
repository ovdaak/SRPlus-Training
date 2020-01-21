export interface MenuInterface {
    id: number;
    event: number;
    title: string;
    anchor: string;
}

export interface MenuResponseInterface {
    menus: MenuInterface[];
}
