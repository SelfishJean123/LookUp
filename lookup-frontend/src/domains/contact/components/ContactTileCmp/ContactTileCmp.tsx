import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./ContactTileCmp.scss";

interface ContactTileCmpProps {
  heading: string;
  subHeading: string;
  bgColor: string;
  icon: ReactNode;
  link: string;
}

const ContactTileCmp: FC<{ heading: string; subHeading: string; bgColor: string; icon: ReactNode; link: string }> = ({
  heading,
  subHeading,
  bgColor,
  icon,
  link,
}: ContactTileCmpProps) => {
  return (
    <NavLink to={link} className="contact-tile-component">
      <div className="contact-icon" style={{ background: bgColor }}>
        {icon}
      </div>
      <h5 className="contact-heading">{heading}</h5>
      <h5 className="contact-sub-heading">{subHeading}</h5>
    </NavLink>
  );
};

export default ContactTileCmp;
