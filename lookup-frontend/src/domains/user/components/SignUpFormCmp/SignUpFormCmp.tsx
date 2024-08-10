import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SignContext from "../../../../common/contexts/SignContext";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import TextInputCmp from "../../../../common/components/inputs/TextInputCmp/TextInputCmp";
import { FC, useContext } from "react";
import { useForm } from "../../../../common/hooks/formHook";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";
import "./SignUpFormCmp.scss";

interface SignUpFormCmpProps {
  close: () => void;
}

const SignUpFormCmp: FC<SignUpFormCmpProps> = ({ close }) => {
  const signContext = useContext(SignContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      firstName: {
        value: "",
        isValid: false,
      },
      lastName: {
        value: "",
        isValid: false,
      },
      userName: {
        value: "",
        isValid: false,
      },
      avatar: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const signUpHandler = async (event: any) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/users/signup",
        "POST",
        JSON.stringify({
          firstName: formState.inputs.firstName.value,
          lastName: formState.inputs.lastName.value,
          userName: formState.inputs.userName.value,
          avatar: formState.inputs.avatar.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      signContext.signIn(responseData.user.id);
    } catch (err) {}
  };

  return (
    <>
      {error && (
        <SnackBarCmp isSnackBarOpen={!!error} message={error} severity="error" variant="filled" onClear={clearError} />
      )}
      <form className="sign-up-form-component" onSubmit={signUpHandler}>
        {isLoading && <ProgressSpinnerCmp asOverlay />}
        <TextInputCmp id="firstName" label="First Name" required={true} type="text" width={100} input={inputHandler} />
        <TextInputCmp id="lastName" label="Last Name" required={true} type="text" width={100} input={inputHandler} />
        <TextInputCmp id="userName" label="User Name" required={true} type="text" width={100} input={inputHandler} />
        <TextInputCmp id="avatar" label="Avatar" required={true} type="text" width={100} input={inputHandler} />
        <TextInputCmp id="email" label="E-mail" required={true} type="email" width={100} input={inputHandler} />
        <TextInputCmp id="password" label="Password" required={true} type="password" width={100} input={inputHandler} />

        <div className="sign-up-form-buttons">
          <LabelIconButton
            label="Close"
            color="#fff"
            bgColor="#387323"
            hoverBgColor="#124500"
            type="button"
            variant="contained"
            onClick={close}
          />
          <LabelIconButton
            label="Sign Up"
            color="#fff"
            bgColor="#387323"
            hoverBgColor="#124500"
            type="submit"
            variant="contained"
            onClick={() => {}}
          />
        </div>
      </form>
    </>
  );
};

export default SignUpFormCmp;
