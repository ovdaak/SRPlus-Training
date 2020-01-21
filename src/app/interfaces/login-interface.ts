export interface UserLogonRequestInterface {
  // Username
  srp_username: string;
  // Password - Base64 Encoded
  srp_password: string;
  // Region ID from Combobox
  srp_region: number;
}

export interface UserLogonResponseInterface {
  status: string;
  userId: number;
  sessionId: string;
  // Optional: Error in case of login problems. Response "errText" needds to be mapped
  errText?: string;
}
