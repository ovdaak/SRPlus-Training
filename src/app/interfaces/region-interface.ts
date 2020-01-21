export interface RegionInterface {
  // Region-ID
  id: number;
  // Region name
  name: string;
  // TRUE, when selected based on IP
  selected: boolean;
}

export interface RegionResponseInterface {
  regions: RegionInterface[];
}
