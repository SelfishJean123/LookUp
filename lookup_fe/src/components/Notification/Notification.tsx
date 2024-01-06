import ErrorIcon from "../_icons/ErrorIcon";
import InfoIcon from "../_icons/InfoIcon";
import SuccessIcon from "../_icons/SuccessIcon";
import WarningIcon from "../_icons/WarningIcon";
import "./Notification.scss";

type notificationType = "error" | "success" | "warning" | "info";

type NotificationProps = {
  notificationType: notificationType;
  notificationMessage: string;
};

const Notification: React.FC<NotificationProps> = ({ notificationType, notificationMessage }) => {
  let noteColor;
  let noteIcon;

  switch (notificationType) {
    case "error":
      noteColor = "alert-danger";
      noteIcon = <ErrorIcon />;
      break;
    case "success":
      noteColor = "alert-success";
      noteIcon = <SuccessIcon />;
      break;
    case "warning":
      noteColor = "alert-warning";
      noteIcon = <WarningIcon />;
      break;
    case "info":
      noteColor = "alert-info";
      noteIcon = <InfoIcon />;
      break;
    default:
      noteColor = "alert-info";
      noteIcon = <InfoIcon />;
  }

  return (
    <div className='notification-component'>
      <div className={`alert ${noteColor}`} role='alert'>
        <div>{notificationMessage}</div>
        {noteIcon}
      </div>
    </div>
  );
};

export default Notification;
