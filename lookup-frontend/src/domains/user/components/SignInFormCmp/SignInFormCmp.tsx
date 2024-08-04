import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import TextInputCmp from "../../../../common/components/inputs/TextInputCmp/TextInputCmp";
import { FC } from "react";
import "./SignInFormCmp.scss";

interface SignInFormCmpProps {
  close: () => void;
}

const SignInFormCmp: FC<SignInFormCmpProps> = ({ close }) => {
  return (
    <form className="sign-in-form-component">
      <TextInputCmp id="email" label="E-mail" required={true} type="email" width={100} />
      <TextInputCmp id="password" label="Password" required={true} type="password" width={100} />

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
  );
};

export default SignInFormCmp;
