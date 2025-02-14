export interface User {
  name: string
  email: string
  phoneNo: string
  profileImage?: string
}
export type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};