export interface UserInterface {
    id: number;
    status: string;
    sessionId: string;
}

export interface RegionInterface {
    id: number;				// Region-ID
    name: string;			// Region name
    selected: boolean;		// TRUE, when selected based on IP
}

export interface RegionResponseInterface {
    regions: RegionInterface[];
}

export interface UserLogonRequestInterface {
    srp_username: string;		// Username
    srp_password: string;		// Password - Base64 Encoded
    srp_region: number;		    // Region ID from Combobox
}

export interface UserLogonResponseInterface {
    status: string;
    userId: number;
    sessionId: string;
    errorText?: string;		// Optional: Error in case of login problems. Response "errText" needds to be mapped
}
