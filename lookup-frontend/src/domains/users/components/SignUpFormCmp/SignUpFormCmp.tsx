import ImagePickerCmp from "../../../../common/components/inputs/ImagePickerCmp/ImagePickerCmp";
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
        value: null,
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
      const formData = new FormData();
      formData.append("firstName", formState.inputs.firstName.value);
      formData.append("lastName", formState.inputs.lastName.value);
      formData.append("userName", formState.inputs.userName.value);
      formData.append("avatar", formState.inputs.avatar.value);
      formData.append("email", formState.inputs.email.value);
      formData.append("password", formState.inputs.password.value);

      const responseData = await sendRequest("https://lookup-backend.joanna-hornung.art/api/users/signup", "POST", formData);
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
        <ImagePickerCmp
          id="avatar"
          label="Upload"
          hintText="Pick an image for your avatar"
          required={true}
          width={100}
          input={inputHandler}
        />
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
