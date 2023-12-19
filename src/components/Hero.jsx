import React from "react";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaSquareInstagram,
} from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import Heroimg from "../images/hero.svg";
import { Typewriter } from "react-simple-typewriter";
import "../style/hero.css";
import {motion} from "framer-motion"
const Hero = (props) => {
  return (
    <div>
      <div className="herocontent">
        <div className="heroimage">
          <img loading="lazy" alt="main hero" src={Heroimg} />
        </div>
        <div className="heroinfo">
          <motion.h1  initial={{ scale: 0 ,right:30000}}
  animate={{ scale: 1,right:0 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    duration: 1000
  }}>
            Hi ,I am{" "}
            <span className="typewriter">
              <Typewriter
                words={props.heroSection.headingWriter}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={190}
                deleteSpeed={190}
                delaySpeed={800}
              />
            </span>{" "}
          </motion.h1>
          <p>{props.heroSection.mainMassage}</p>
          <div className="btnOfHireMe">
            <a href="#Contact ">
              <button>Hire Me</button>
            </a>
          </div>
          <div className="socialMedaIcons">
            <a target="_blank" href={props.heroSection.socialMediaLinks.linkedIn} rel="noreferrer">
              <FaLinkedin className="icons" />
            </a>
            <a
              target="_blank"
              href={props.heroSection.socialMediaLinks.faceBook}
              rel="noreferrer"
            >
              <FaSquareFacebook className="icons" />
            </a>
            <a
              target="_blank"
              href={props.heroSection.socialMediaLinks.instagram}
              rel="noreferrer"
            >
              <FaSquareInstagram className="icons" />
            </a>
            <a
              target="_blank"
              href={props.heroSection.socialMediaLinks.email}
              rel="noreferrer"
            >
              <MdMarkEmailUnread className="icons" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
