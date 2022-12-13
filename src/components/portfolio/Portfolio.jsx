import "./portfolio.scss"

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="left">
        <div className="wrapper">
          <h1 class="dragDrop--title"> Why do you <br/><span class="mouse_draw">Hire </span>Me?</h1>
          <p>I've got a Udacity Front End Developer Nanodegree, ITI Js Developer Certificate, and Google UX Design Professional Certificate.
I'm looking for a role combining my passion for Web UI Design systems, Agile mindset, and SCRUM framework with my front-end skills.</p>
        </div>
      </div>
          
      <div className="right">
        <div className="imgContainer"><img src="assets/udacity.png" alt="" /></div>
      </div>      
    </div>
  )
}

export default Portfolio;
