import { CircularProgress } from "@mui/material";
import { FC } from "react";
import "./ProgressBarCmp.scss";

interface ProgressBarCmpProps {
  asOverlay: boolean;
}

const ProgressBarCmp: FC<ProgressBarCmpProps> = ({ asOverlay }) => {
  return (
    <div className={`${asOverlay && "progress-bar-component__overlay"}`}>
      <CircularProgress color="inherit" />
    </div>
  );
};

export default ProgressBarCmp;
