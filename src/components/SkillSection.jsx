import React from "react";
import "../style/skill.css";
import { motion } from "framer-motion";
const Skills = ({data}) => {
  return (
    <article>
      <div className="ContainerSkil" id="skills">
        <div className="Wrapper">
          <div className="Title">Skills</div>
          <div className="Desc">{data.skills.massage}</div>
          <div className="SkillsContainer">
            {data.skills.skillSection.map((skill, index) => (
              <div className="Skill" key={index}>
                <h2 className="SkillTitle">{skill.title}</h2>
                <div className="SkillList">
                  {skill.allSkils.map((item, index) => (
                    <motion.div
                      className="SkillItem"
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 300,
                        damping: 50,
                      }}
                    >
                      <img
                        loading="lazy"
                        className="SkillImage"
                        alt="skills iamges"
                        src={item.img}
                      />
                      {item.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Skills;
