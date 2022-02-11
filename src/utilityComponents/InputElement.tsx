import React, { useState } from "react";

import { Box, SxProps, TextField, Theme } from "@mui/material";
import styles from "./InputElement.module.css";
import { UseFormRegister, UseFormTrigger } from "react-hook-form";
import {
  CheckOutFormKeys,
  EmailFormData,
} from "../structure/checkout/EmailForm";

type TextFieldProps = {
  textFieldType: CheckOutFormKeys;
  label: string;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  register: UseFormRegister<EmailFormData>;
  error: string | undefined;
  defaultValue: string;
  formDataHandler: (
    data:
      | EmailFormData
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  getValuesHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

// COMPONENT
const InputElement: React.FC<TextFieldProps> = ({
  textFieldType,
  label,
  sx,
  children,
  register,
  error,
  defaultValue,
  formDataHandler,
  getValuesHandler,
}) => {
  const [value, setValue] = useState(defaultValue || "");
  console.log(value);
  console.log(defaultValue);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      <TextField
        size="small"
        {...register(textFieldType)}
        label={label}
        value={defaultValue}
        // This needs to be passed up and submitted tp CheckOutMain useState formdata
        onChange={(e) => {
          setValue(e.target.value);
          formDataHandler(e);
        }}
      />
      {children}
      <p className={styles.errorMessage}>{error}</p>
    </Box>
  );
};

export default InputElement;
