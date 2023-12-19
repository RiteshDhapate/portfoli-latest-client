import React from "react";
import "../style/selfinfo.css";
import { AiFillGift } from "react-icons/ai";
import {
  BsCalendarDay,
  BsBookmarkFill,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoGameControllerSharp } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";

const SelfInfo = (props) => {
  return (
    <section>
      {" "}
      <div className="selfInfoContaner">
      <div className="photo">
            <img loading="lazy" src={props.selfInfo.img} alt="" />
          </div>
        <div className="selfInfoCoverDiv">
          
          <div className="selfInformationdiv">
            <h1>{props.selfInfo.title}</h1>
            <p>
              Hi! My name is <span>Ritesh Dhapate</span>.{" "}
              {props.selfInfo.massage}
            </p>
            <div className="selfInfo">
              <div className="infoData">
                <div className="firstInfoDiv">
                  <b>
                    <span>
                      <AiFillGift />
                    </span>
                    &nbsp;&nbsp;Birthday
                  </b>
                  :<span>&nbsp;&nbsp;{props.selfInfo.birthday}</span>
                </div>
                <div className="secoundInfoDiv">
                  <b>
                    <span>
                      <BsCalendarDay />
                    </span>
                    &nbsp;&nbsp;Age
                  </b>
                  :<span>&nbsp;{props.selfInfo.age}</span>
                </div>
              </div>
              <div className="infoData">
                <div className="firstInfoDiv">
                  <b>
                    <span>
                      <FaLocationDot />
                    </span>
                    &nbsp;&nbsp;Location
                  </b>
                  :<span>&nbsp;&nbsp;{props.selfInfo.location}</span>
                </div>
                <div className="secoundInfoDiv">
                  <b>
                    <span>
                      <IoGameControllerSharp />
                    </span>
                    &nbsp;&nbsp;Interests
                  </b>
                  :<span>&nbsp;&nbsp;{props.selfInfo.intrest}</span>
                </div>
              </div>
              <div className="infoData">
                <div className="firstInfoDiv">
                  <b>
                    <span>
                      <BsBookmarkFill />
                    </span>
                    &nbsp;&nbsp;Study
                  </b>
                  :<span>&nbsp;&nbsp;{props.selfInfo.study}</span>
                </div>
                <div className="secoundInfoDiv">
                  <b>
                    <span>
                      <GiGraduateCap />
                    </span>
                    &nbsp;&nbsp;Degree
                  </b>
                  :<span>&nbsp;&nbsp;{props.selfInfo.degree}</span>
                </div>
              </div>
              <div className="infoData">
                <div className="firstInfoDiv">
                  <b>
                    <span>
                      <IoMdMail />
                    </span>
                    &nbsp;&nbsp;Email
                  </b>
                  :<span>&nbsp;&nbsp;{props.selfInfo.mail}</span>
                </div>
                <div className="secoundInfoDiv">
                  <b>
                    <span>
                      <BsFillTelephoneOutboundFill />
                    </span>
                    &nbsp;&nbsp;Phone
                  </b>
                  :<span>&nbsp;&nbsp;{props.selfInfo.phone}</span>
                </div>
              </div>
            </div>
            {console.log(props.selfInfo.cvLink)}
            <a href={props.selfInfo.cvLink} download="CV">
              <button>
                {props.selfInfo.btnText}
              </button>
            </a>
            <a href={props.selfInfo.resumeLink} download="CV">
              <button>
                {props.selfInfo.btn2Text}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfInfo;
