import { CircularProgress } from "@mui/material";
import { FC } from "react";
import "./ProgressSpinnerCmp.scss";

interface ProgressSpinnerCmpProps {
  asOverlay: boolean;
}

const ProgressSpinnerCmp: FC<ProgressSpinnerCmpProps> = ({ asOverlay }) => {
  return (
    <div className={`${asOverlay && "progress-spinner-component__overlay"}`}>
      <CircularProgress color="inherit" />
    </div>
  );
};

export default ProgressSpinnerCmp;
