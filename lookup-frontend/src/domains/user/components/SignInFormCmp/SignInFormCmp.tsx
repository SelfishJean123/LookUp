import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SignContext from "../../../../common/contexts/SignContext";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import TextInputCmp from "../../../../common/components/inputs/TextInputCmp/TextInputCmp";
import { FC, useContext } from "react";
import { useForm } from "../../../../common/hooks/formHook";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";
import "./SignInFormCmp.scss";

interface SignInFormCmpProps {
  close: () => void;
}

const SignInFormCmp: FC<SignInFormCmpProps> = ({ close }) => {
  const signContext = useContext(SignContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
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

  const signInHandler = async (event: any) => {
    event.preventDefault();

    const responseData = await sendRequest(
      "http://localhost:5000/api/users/signin",
      "POST",
      JSON.stringify({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      }),
      {
        "Content-Type": "application/json",
      }
    );
    signContext.signIn(responseData.user.id);
  };

  return (
    <>
      {error && (
        <SnackBarCmp isSnackBarOpen={!!error} message={error} severity="error" variant="filled" onClear={clearError} />
      )}
      <form className="sign-in-form-component" onSubmit={signInHandler}>
        {isLoading && <ProgressSpinnerCmp asOverlay />}
        <TextInputCmp id="email" label="E-mail" required={true} type="email" width={100} input={inputHandler} />
        <TextInputCmp id="password" label="Password" required={true} type="password" width={100} input={inputHandler} />

        <div className="sign-in-form-buttons">
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
            label="Sign In"
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

export default SignInFormCmp;
