import ContactTileCmp from "../../components/ContactTileCmp/ContactTileCmp";
import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import TopDescriptionCmp from "../../../../common/components/texts/TopDescriptionCmp/TopDescriptionCmp";
import { Call, FacebookOutlined, Instagram, MailOutline } from "@mui/icons-material";
import "./ContactPage.scss";
import ContactUsFormCmp from "../../components/ContactUsFormCmp/ContactUsFormCmp";

const ContactPage = () => {
 
  return (
    <div className="contact-page">
      
      <MainHeadingCmp headingText="Contact Us" />

      <TopDescriptionCmp
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."
      />
      <div className="contact-tiles">
        <ContactTileCmp
          heading="E-mail"
          subHeading="lookup@lookup.com"
          bgColor="#36775F"
          icon={<MailOutline />}
          link=""
        />
        <ContactTileCmp heading="Mobile" subHeading="+48 500 500 500" bgColor="#AC5353" icon={<Call />} link="" />
        <ContactTileCmp
          heading="Facebook"
          subHeading="/lookup"
          bgColor="#3D5A96"
          icon={<FacebookOutlined />}
          link="https://www.facebook.com/"
        />
        <ContactTileCmp
          heading="Instagram"
          subHeading="/lookup"
          bgColor="linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
          icon={<Instagram />}
          link="https://www.instagram.com/"
        />
      </div>
      <ContactUsFormCmp />
    </div>
  );
};

export default ContactPage;
