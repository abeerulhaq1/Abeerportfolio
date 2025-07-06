import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/abeer-haq-074543285/?trk=public-profile-join-page" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/abeerulhaq1" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/abeer_ul_haq/?next=%2F" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
