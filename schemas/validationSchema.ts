// /schemas/validationSchema.ts
import * as yup from "yup";

export const signupSchema = yup.object({
  username: yup.string().min(3, "Username must be at least 3 characters").required("Username is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phoneNo: yup.string().matches(/^\d{10,15}$/, "Enter a valid phone number").required("Phone number is required"),
  address: yup.string().min(5, "Address must be at least 5 characters").required("Address is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const loginSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
