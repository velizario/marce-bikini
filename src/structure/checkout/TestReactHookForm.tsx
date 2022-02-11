import { Button, Container, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./InputField";
// StarButton displays a single star
// It is controlled via active and onClick props

export type CheckOutFormKeys = "firstName" | "lastName" | "email";

export type FormTypes = Record<CheckOutFormKeys, string>;

const defaultValues: FormTypes = {
  firstName: "",
  lastName: "",
  email: "",
};

export const schema = yup.object().shape({
  email: yup.string().email().required("Please enter valid email"),
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
});

export default function TestReactHookForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormTypes>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  // const {handleSubmit, control} = useForm<FormValues>(initialFormValues)
  return (
    <form onSubmit={handleSubmit((data: any) => console.log(data))}>
      {/* <InputField
        control={control}
        name="email"
        error={errors.email?.message}
      />
      <InputField
        control={control}
        name="firstName"
        error={errors.firstName?.message}
      />
      <InputField
        control={control}
        name="lastName"
        error={errors.lastName?.message}
      /> */}

      <input type="submit" />
    </form>
  );

  //   <TextField
  //     size="small"
  //     {...register(textFieldType)}
  //     label={label}
  //     value={defaultValue}
  //     // This needs to be passed up and submitted tp CheckOutMain useState formdata
  //     onChange={(e) => {
  //       setValue(e.target.value);
  //       formDataHandler(e);
  //     }}
  //   />;
}
