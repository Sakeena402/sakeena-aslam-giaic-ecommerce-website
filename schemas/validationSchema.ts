// // /schemas/validationSchema.ts
// import * as yup from "yup";

// export const signupSchema = yup.object({
//   username: yup.string().min(3, "Username must be at least 3 characters").required("Username is required"),
//   email: yup.string().email("Enter a valid email").required("Email is required"),
//   phoneNo: yup.string().matches(/^\d{10,15}$/, "Enter a valid phone number").required("Phone number is required"),
//   address: yup.string().min(5, "Address must be at least 5 characters").required("Address is required"),
//   password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
// });

// export const loginSchema = yup.object({
//   email: yup.string().email("Enter a valid email").required("Email is required"),
//   password: yup.string().required("Password is required"),
// });

// /schemas/validationSchema.ts
import * as yup from "yup";

// Existing schemas
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

// New password recovery schemas
export const forgotPasswordSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
});

export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref('password')], "Passwords must match")
});