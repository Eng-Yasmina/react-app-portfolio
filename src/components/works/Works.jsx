import "./works.scss"
import {data} from "../../data.js";
import { useState } from 'react';

function Works() {
  const [currentSlide,setCurrentSlide] = useState(0);
  const handleClick = (way)=>{
    way === "left" ?
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4) :
    setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <h2 class="works-title"> Quickly Contact Me For Your <br/> Next Stunning Website! </h2>
      <div className="projects">
      <div className="slider" style={{ transform: `translateX(-${currentSlide *100}vw)`}}>
        {data.map((d) => ( 
        <div className="container">
          <div className="item">
            <div className="image">
              <img src={d.img} alt="" />
              <a href={d.a} className="demo">View Demo</a>
            </div>
            <p className="project-title">{d.title}</p>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}
export default Works;