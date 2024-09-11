import { FC } from "react";
import "./AvatarCmp.scss";

interface AvatarCmpProps {
  imgSrc: string;
}

const AvatarCmp: FC<AvatarCmpProps> = ({ imgSrc }) => {
  return (
    <div className="avatar-component">
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default AvatarCmp;
