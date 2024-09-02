import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import { FC } from "react";
import "./SignOutFormCmp.scss";

interface SignOutFormCmpProps {
  close: () => void;
}

const SignOutFormCmp: FC<SignOutFormCmpProps> = ({ close }) => {
  return (
    <form className="sign-out-form-component">
      <div className="sign-out-form-buttons">
        <LabelIconButton
          label="NO"
          color="#fff"
          bgColor="#387323"
          hoverBgColor="#124500"
          type="button"
          variant="contained"
          onClick={close}
        />
        <LabelIconButton
          label="YES"
          color="#fff"
          bgColor="#ff0000"
          hoverBgColor="#a74713"
          type="submit"
          variant="contained"
          onClick={() => {}}
        />
      </div>
    </form>
  );
};

export default SignOutFormCmp;
