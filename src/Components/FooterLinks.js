import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function FooterLinks() {
  return (
    <div className="footer_links">
      <p>@2022 Urbanfit Wellness Private Limited</p>
      <div className="links_container">
        <BsLinkedin className="f_link" />
        <FaFacebookSquare className="f_link" />
        <AiFillInstagram className="f_link" />
        <FaTwitterSquare className="f_link" />
      </div>
      <p className="privacy">Privacy Policy</p>
      <a href="/" className="up_btn">
        <BsFillArrowUpCircleFill />
      </a>
    </div>
  );
}

export default FooterLinks;
