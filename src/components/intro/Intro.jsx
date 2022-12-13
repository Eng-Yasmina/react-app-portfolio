import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react'

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor:false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Frontend Engineer', 'UI Designer' ],
    });
  }, []);

  return (
    <div className="main">
      <div className="intro" id="intro">
        <div className="left">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Yasmine</h1>
            <h3>Freelance <span ref={textRef}></span></h3>
          </div>
        </div>
        <div className="right">
          <div className="imgContainer"><img src="assets/2.png" alt="" /></div>
        </div>
      </div>

      <a href="https://wa.me/201028520380" className="whatsapp"><img src="assets/whatsapp.png" alt="" /></a>

      <div className="intro" id="about">
      <div className="right">
          <div className="imgContainer"><img src="assets/3.png" alt="" /></div>
        </div>

        <div className="left">
          <div className="wrapper">
            <h1>About Me</h1>
            <p>I'm a front-end developer who graduated from the Faculty of Engineering at Alexandria University and loves building modern, resilient, and inclusive Web user interfaces with a strong focus on responsive design, performance, and accessibility.</p>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Intro;
