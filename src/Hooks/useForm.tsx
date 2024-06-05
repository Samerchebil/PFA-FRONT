import React, { useState } from "react";

export interface FormField {
  name: string;
  value: string;
}

export type FormFields = Record<string, FormField>;

export interface FormErrors {
  [fieldName: string]: string;
}

export interface UseFormResult {
  formFields: FormFields;
  formErrors: FormErrors;
  handleChange: (fieldName: string, value: string) => void;
  handleSubmit: (cb?: (data: FormFields) => void) => void;
}

const useForm = (
  initialValues: FormFields,
  validate: (fields: FormFields) => FormErrors
): UseFormResult => {
  const [formFields, setFormFields] = useState<FormFields>(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (fieldName: string, value: string) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      [fieldName]: {
        ...prevFields[fieldName],
        value,
      },
    }));
  };

  const handleSubmit = (cb?: (data: FormFields) => void) => {
    const errors = validate(formFields);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form is valid 🚀 submit form");
      if (cb) return cb(formFields);
    }
  };

  return { formFields, formErrors, handleChange, handleSubmit };
};

export default useForm;
