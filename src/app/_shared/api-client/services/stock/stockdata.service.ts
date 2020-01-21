import { Injectable } from '@angular/core';
import { WareneingangHeadDataInterface, WareneingangPositionDataInterface } from '../../interfaces/stock/stockdata.interface';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor() { }

  setHeadData(id: number,
              room: string,
              locationId: number,
              instituteId: number,
              inventoryCode: string,
              serialNo: string,
              phaseId: number,
              categoryId: number,
              properties: [{
                  id: number,
                  value: string
                }]
    ): WareneingangPositionDataInterface {
const positionData: WareneingangPositionDataInterface = {
  id,
  room,
  locationId,
  instituteId,
  inventoryCode,
  serialNo,
  phaseId,
  categoryId,
  properties
  };

return positionData;
}

setPositionData(deliveryRecieptNo: string, orderNo: string, deliveryDate: Date): WareneingangHeadDataInterface {
const headData: WareneingangHeadDataInterface = {
  deliveryRecieptNo,
  orderNo,
  deliveryDate
  };

return headData;
}

}
