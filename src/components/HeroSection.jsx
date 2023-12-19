import React, { useEffect, useState } from "react";
import Img1 from "../images/wave-top.png";
import Img2 from "../images/wave-mid.png";
import Img3 from "../images/wave-bot.png";
import Hero from "./Hero.jsx";
import "../style/main.css";
import SectionInfo from "./SectionInfo.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import Skills from "./SkillSection.jsx";
import Sidebar from "./Sidebar.jsx";
import Cursor from "../components/Cursor.jsx";
import Footer from "./Footer.jsx";
import TimeLine from "./TimeLine.jsx";
import axios from "axios";
const HeroSection = () => {
  const sectionInfoShow = window.innerWidth;
  const [loding, setLoding] = useState(false);
  const [dataitem,setData] = useState(null);
  
  useEffect(()=>{
    const loadData = async() =>{
        try {
          setLoding(true)
          const {data}= await axios.get("http://localhost:2000/api/data");
        setData(data);
        setLoding(false);
        } catch (error) {
          alert("error loading data");
          console.error(error);
        }
    }
    loadData();
  },[]);

  if(loding || dataitem == null) {
    return <h1>data is loading </h1>
  }

  return (
    <div>
      {/* ********************************************* */}
      {/* hero dection start hear */}
      {/* ********************************************* */}
      <section id="Home">
        <Cursor />
        <Sidebar />
        <div className="contaner">
          <div className="animation">
            <div className="waveWrapper waveAnimation">
              <div className="waveWrapperInner bgTop">
                <div
                  className="wave waveTop"
                  style={{ backgroundImage: `url(${Img1})` }}
                ></div>
              </div>
              <div className="waveWrapperInner bgMiddle">
                <div
                  className="wave waveMiddle "
                  style={{ backgroundImage: `url(${Img2})` }}
                ></div>
              </div>
              <div className="waveWrapperInner bgBottom">
                <div
                  className="wave waveBottom "
                  style={{ backgroundImage: `url(${Img3})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <Hero heroSection={dataitem.heroSection} />
        </div>
      </section>
      {/* ********************************************* */}
      {/* hero dection end hear */}
      {/* ********************************************* */}

      {/* ********************************************* */}
      {/* about section start hear */}
      {/* ********************************************* */}
      {sectionInfoShow >= 480 && (
        <section>
          <div>
            <SectionInfo />
          </div>
        </section>
      )}
      <section id="About">
        <div>
          <About data={dataitem} />
        </div>
      </section>
      {/* ********************************************* */}
      {/* about section end hear */}
      {/* ********************************************* */}

      {/* ********************************************* */}
      {/* skill section start hear */}
      {/* ********************************************* */}

      <section id="Services">
        <div className="skillSection">
          <Skills data={dataitem}/>
        </div>
      </section>
      {/* ********************************************* */}
      {/* skill section end hear */}
      {/* ********************************************* */}

      {/* ********************************************* */}
      {/* TimeLine section start hear */}
      {/* ********************************************* */}

      <section>
        <TimeLine data={dataitem}/>
      </section>

      {/* ********************************************* */}
      {/* timeline section end hear */}
      {/* ********************************************* */}

      {/* ********************************************* */}
      {/* project section start hear */}
      {/* ********************************************* */}
      <section id="Projects">
        <div className="projectSection">
          <Project data={dataitem}/>
        </div>
      </section>

      {/* ********************************************* */}
      {/* project section end hear */}
      {/* ********************************************* */}

      {/* ********************************************* */}
      {/* contact section start hear */}
      {/* ********************************************* */}
      <section
        id="Contact"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="contactSection">
          <Contact data={dataitem}/>
        </div>
      </section>
      {/* <section></section> */}
      {/* ********************************************* */}
      {/* contact section end hear */}
      {/* ********************************************* */}
      <section className="footerSection">
        <Footer data={dataitem}/>
      </section>
    </div>
  );
};

export default HeroSection;
