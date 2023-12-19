import { useRef } from "react";
import "../style/Project.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {useNavigate} from "react-router-dom";
const Single = ({ item }) => {
  const ref = useRef();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
  });


  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div>
              <a href={item.demoUrl}><button>See Demo</button></a>
              <a href={item.githubUrl}><button>GitHub</button></a>
              <button onClick={()=>navigate(`/info/${item.id}`)}>more Info</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({data}) => {
  const items = data.projects;
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <div className="projects">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
