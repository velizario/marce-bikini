import { Box, SxProps, TextField, Theme, Typography } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { CheckOutFormKeys, EmailFormData } from "./EmailForm";
import styles from "./InputField.module.css";

type InputFieldProps = {
  control: Control<EmailFormData, object>;
  name: CheckOutFormKeys;
  error: string | undefined;
  label: string;
  sx?: SxProps<Theme>;
};

const InputField: React.FC<InputFieldProps> = ({
  control,
  name,
  label,
  error,
  sx,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            size="small"
            label={label}
            value={value}
            onChange={onChange}
          ></TextField>
        )}
      />
      <Typography variant="body1" className={styles.errorMessage}>
        {error}
      </Typography>
    </Box>
  );
};

export default InputField;
