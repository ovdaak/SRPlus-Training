export interface WareneingangHeadDataInterface {
    deliveryRecieptNo: string;
    orderNo: string;
    deliveryDate: Date;
}

export interface WareneingangPositionDataInterface {
    id: number;
    room: string;
    locationId: number;
    instituteId: number;
    inventoryCode: string;
    serialNo: string;
    phaseId: number;
    categoryId: number;
    properties: [{
        id: number;
        value: string;
    }];
}
