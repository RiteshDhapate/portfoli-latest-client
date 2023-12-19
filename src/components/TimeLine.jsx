import "../style/timeLine.css";
import React from "react";
import { motion } from "framer-motion";
const TimeLine = ({data}) => {
  return (
    <>
      {data.timeLine.map((data,index) => {
        return (
          <section key={index}>
            <div class="main-section">
              <div class="timeline-container">
                <h1>{data.title}</h1>
                {data.content.map((content,index) => {
                  return (
                    <div class="box" key={index}>
                      <div class="points"></div>
                      <div class="year">{content.time}</div>
                      <motion.div
                        class="content"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          type: "spring",
                          stiffness: 300,
                          damping: 50,
                        }}
                      >
                        <h3>{content.heading}</h3>
                        <p>{content.massage}</p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default TimeLine;
