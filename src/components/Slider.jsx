import { useState } from "react";
import "../style/slider.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import data from "../static.js";
import {useParams} from "react-router-dom"
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {id} = useParams(); 
const filterData= data.projects.filter((project)=>{
  return project.id === parseInt(id);
})
console.log(filterData)
  // const data = [
  //   {
  //     id: "1",
  //     icon: "./assets/mobile.png",
  //     title: "Web Design",
  //     desc:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  //     img:
  //       "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
  //   },
  //   {
  //     id: "2",
  //     icon: "./assets/globe.png",
  //     title: "Mobile Application",
  //     desc:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     img:
  //       "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
  //   },
  //   {
  //     id: "3",
  //     icon: "./assets/writing.png",
  //     title: "Branding",
  //     desc:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     img:
  //       "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
  //   },
  //   {
  //     id: "4",
  //     icon: "./assets/writing.png",
  //     title: "Branding",
  //     desc:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     img:
  //       "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
  //   },
  // ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < filterData[0].images.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {filterData[0].images.map((d) => (
          <div className="container">
            <div className="item">
              <div className="right">
                <img
                  src={d}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <FaArrowAltCircleRight className="arrow left" onClick={() => handleClick("left")}/>
    
      <FaArrowAltCircleRight className="arrow right" onClick={() => handleClick()}/>
    </div>
  );
}
