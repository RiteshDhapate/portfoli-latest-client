import React from "react";
import "../style/Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaSquareInstagram,
} from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
const Footer = ({data}) => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Software <span>Developer</span>
          </h3>

          <p className="footer-links">
            <a href="#Home" className="footerNavLinks">
              Home
            </a>

            <a href="#About" className="footerNavLinks">
              About
            </a>

            <a href="#Projects" className="footerNavLinks">
              Work
            </a>

            <a href="#" className="footerNavLinks">
              Resume
            </a>
          </p>

          <p className="footer-company-name">Ritesh Dhapate © 2023</p>
        </div>

        <div className="footer-center">
          <div>
            <i>
              <FaLocationDot />
            </i>
            <p>
              <span>413114 Anthurne , maharashtra, India</span>{" "}
            </p>
          </div>

          <div>
            <i>
              <BsFillTelephoneOutboundFill />
            </i>
            <p>
              <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
            </p>
          </div>

          <div>
            <i>
              <IoMdMail />
            </i>
            <p>
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Software Developer</span>I have acquired the skills and
            knowledge necessary to make your project a success.
          </p>

          <div className="footer-icons">
            <a
              target="_blank"
              href={data.heroSection.socialMediaLinks.faceBook}
              rel="noreferrer"
            >
              <i>
                <FaSquareFacebook />
              </i>
            </a>
            <a
              target="_blank"
              href={data.heroSection.socialMediaLinks.instagram}
              rel="noreferrer"
            >
              <i>
                <FaSquareInstagram />
              </i>
            </a>
            <a
              href={data.heroSection.socialMediaLinks.linkedIn}
              rel="noreferrer"
            >
              <i>
                <FaLinkedin />
              </i>
            </a>
            <a href={data.heroSection.socialMediaLinks.email} rel="noreferrer">
              <i>
                <MdMarkEmailUnread />
              </i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
