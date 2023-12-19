import React from "react";
import "../style/about.css";
import SelfInfo from "./SelfInfo";
const About = ({data}) => {
  const styledata = {
    span1: {
      "--i": 11,
    },
    span2: {
      "--i": 12,
    },
    span3: {
      "--i": 24,
    },
    span4: {
      "--i": 10,
    },
    span5: {
      "--i": 14,
    },
    span6: {
      "--i": 23,
    },
    span7: {
      "--i": 18,
    },
    span8: {
      "--i": 16,
    },
    span9: {
      "--i": 19,
    },
    span10: {
      "--i": 10,
    },
    span11: {
      "--i": 22,
    },
    span12: {
      "--i": 25,
    },
    span11: {
      "--i": 18,
    },
    span13: {
      "--i": 21,
    },
    span14: {
      "--i": 15,
    },
    span15: {
      "--i": 13,
    },
    span16: {
      "--i": 26,
    },
    span17: {
      "--i": 17,
    },
    span18: {
      "--i": 13,
    },
    span19: {
      "--i": 28,
    },
    span20: {
      "--i": 80,
    },
  };
  return (
  
    <div className="aboutContaner">
      <div className="bubooles">
        <span style={styledata.span1}></span>
        <span style={styledata.span2}></span>
        <span style={styledata.span3}></span>
        <span style={styledata.span4}></span>
        <span style={styledata.span5}></span>
        <span style={styledata.span6}></span>
        <span style={styledata.span7}></span>
        <span style={styledata.span8}></span>
        <span style={styledata.span9}></span>
        <span style={styledata.span10}></span>
        <span style={styledata.span11}></span>
        <span style={styledata.span12}></span>
        <span style={styledata.span13}></span>
        <span style={styledata.span14}></span>
        <span style={styledata.span15}></span>
        <span style={styledata.span16}></span>
        <span style={styledata.span17}></span>
        <span style={styledata.span18}></span>
        <span style={styledata.span19}></span>
        <span style={styledata.span20}></span>
        <span style={styledata.span1}></span>
        <span style={styledata.span2}></span>
        <span style={styledata.span3}></span>
        <span style={styledata.span4}></span>
        <span style={styledata.span5}></span>
        <span style={styledata.span6}></span>
        <span style={styledata.span7}></span>
        <span style={styledata.span8}></span>
        <span style={styledata.span9}></span>
        <span style={styledata.span10}></span>
        <span style={styledata.span11}></span>
        <span style={styledata.span12}></span>
        <span style={styledata.span13}></span>
        <span style={styledata.span14}></span>
        <span style={styledata.span15}></span>
        <span style={styledata.span16}></span>
        <span style={styledata.span17}></span>
        <span style={styledata.span18}></span>
        <span style={styledata.span19}></span>
        <span style={styledata.span20}></span>
        <span style={styledata.span1}></span>
        <span style={styledata.span2}></span>
        <span style={styledata.span3}></span>
        <span style={styledata.span4}></span>
        <span style={styledata.span5}></span>
        <span style={styledata.span6}></span>
        <span style={styledata.span7}></span>
        <span style={styledata.span8}></span>
        <span style={styledata.span9}></span>
        <span style={styledata.span10}></span>
        <span style={styledata.span11}></span>
        <span style={styledata.span12}></span>
        <span style={styledata.span13}></span>
        <span style={styledata.span14}></span>
        <span style={styledata.span15}></span>
        <span style={styledata.span16}></span>
        <span style={styledata.span17}></span>
        <span style={styledata.span18}></span>
        <span style={styledata.span19}></span>
        <span style={styledata.span20}></span>
      </div>
      <div className="conatctInfo">
       {data.aboutSection.mainMassage}
      </div>
      <div className="selfInfoConatctDiv">
        {/* <SelfInfo selfInfo={props.ContactData[0].selfInfo} /> */}
        <SelfInfo selfInfo={data.aboutSection.selfInfo} />
      </div>
    </div>
  );
};

export default About;
