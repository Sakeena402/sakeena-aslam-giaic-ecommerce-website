export interface User {
  name: string
  email: string
  phoneNo: string
  avatar: string
}
export type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  apartment?: string;
  landmark?: string;
  phoneNumber?: string;
  addressType?: "Home" | "Office" | "Other";
};
