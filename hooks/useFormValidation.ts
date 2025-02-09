// /hooks/useFormValidation.ts
import { useState } from "react";
import { AnyObjectSchema } from "yup";

const useFormValidation = (schema: AnyObjectSchema) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = async (data: { [key: string]: string }) => {
    try {
      await schema.validate(data, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err:any) {
      const validationErrors: { [key: string]: string } = {};
      if (err.inner) {
        err.inner.forEach((error: any) => {
          validationErrors[error.path] = error.message;
        });
      }
      setErrors(validationErrors);
      return false;
    }
  };

  return { errors, validate };
};

export default useFormValidation;
