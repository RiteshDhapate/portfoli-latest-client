import React, { useRef } from "react";
import "../style/sectionInfo.css";
import { motion, useScroll, useTransform } from "framer-motion";
const SectionInfo = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div className="parallax" ref={ref}>
      <motion.h1 style={{ y: ytext }}>About Me</motion.h1>
      <motion.div className="mountants"></motion.div>
      <motion.div className="planets" style={{ y: ybg }}></motion.div>
      <motion.div className="stars" style={{ x: ybg }}></motion.div>
    </div>
  );
};

export default SectionInfo;
