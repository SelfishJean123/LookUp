import LabelIconButtonCmp from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import { Button, FormLabel, Input, Tooltip } from "@mui/material";
import { CancelOutlined } from "@mui/icons-material";
import { FC } from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import "./SignInFormCmp.scss";

interface SignInFormCmpProps {
  close: () => void;
}

const SignInFormCmp: FC<SignInFormCmpProps> = ({ close }) => {
  // const { methods, signIn } = useUserService(close);
  // const { register, formState } = useFormContext();

  return (
    // <FormProvider {...methods}>
    // <form onSubmit={signIn}>
    <form>
      <FormLabel>E-mail</FormLabel>
      <Input
        // {...register("e-mail")}
        type="text"
        role="text-input"
        placeholder="e-mail"
        slotProps={{ input: { id: "e-mail", "aria-label": "e-mail" } }}
        // endAdornment={
        //   <Tooltip title={formState?.errors["e-mail"]?.message?.toString()}>
        //     <CancelOutlined />
        //   </Tooltip>
        // }
      />

      <FormLabel>Password</FormLabel>
      <Input
        // {...register("password")}
        type="text"
        role="text-input"
        placeholder="password"
        slotProps={{ input: { id: "password", "aria-label": "password" } }}
      />

      <LabelIconButtonCmp label="Sign In" type="button" variant="contained" />
    </form>
    // </FormProvider>
  );
};

export default SignInFormCmp;
