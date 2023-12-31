import { useState } from "react";
import "../style/slider.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useLocation, useParams, useNavigate } from "react-router-dom";
export default function Works() {
  const location = useLocation();
  const navigation = useNavigate();
  const data = location.state.data;
  const [currentSlide, setCurrentSlide] = useState(0);
  const { id } = useParams();
  const filterData = data.projects.filter((project) => {
    return project.id === parseInt(id);
  });

  if (data === undefined || data === null) {
    navigation("/");
  }
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < filterData[0].images.length - 1 ? currentSlide + 1 : 0
        );
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
                <img src={d} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <FaArrowAltCircleRight
        className="arrow left"
        onClick={() => handleClick("left")}
      />

      <FaArrowAltCircleRight
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
