import React from 'react';
import axios from 'axios';
import Flowers from '../../assets/images/flowers3.png';
import RectanglePolaroid from '../../assets/images/rectangle-polaroid.png';
import Polaroid from '../../assets/images/polaroid.png';
import ProjectQueue from '../ProjectQueue/ProjectQueue'
import './projects.scss';

class Projects extends React.Component {

  state={
    projects:[]
  }

  componentDidMount() {
    axios.get('http://localhost:5000/projects')
    .then(res => {
        console.log(res.data)
        this.setState({
            projects: res.data
        });
        console.log(this.state.projects[this.state.projects.length-1])
    })
    .catch(err => console.log(err))
  }

  updateHero = (id) => {
    axios.get(`/projects/${id}`)
    .then(res => {  
      window.scrollTo(0, 0);

      // let commentsForm = document.querySelector('.comments-section__form');
      // commentsForm.reset();
      
      this.setState({
        projects: [res.data]
      });
    })
    .catch(err => console.log(err));
  };
  
  // componentDidUpdate(prevProps) {
    
  //   if (prevProps.match.params.id !== this.props.match.params.id) {
  //     this.updateHero(this.props.match.params.id);
  //   };
  // };
  
  render() {
    const lastProject = this.state.projects[this.state.projects.length-1]

    return (
      <div className="section" id="projects">
          <div className="projects__wave projects__wave1">
            <svg viewBox="0 60 500 80" preserveAspectRatio="xMinYMin meet">
              <path className="projects__wave-svg projects__wave-svg1" d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
            </svg>
          </div>
          <div className="projects__wave projects__wave2">
            <svg viewBox="0 60 500 80" preserveAspectRatio="xMinYMin meet">
              <path className="projects__wave-svg projects__wave-svg2" d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
            </svg>
          </div>
          <p className="title" style={{display: 'none'}}>projects</p>
          <div className="parallax parallax3">
              <h2 className="projects__section-title box-title">creations</h2>
              <div className="projects__section-box title-box"></div>
          </div>
          <div className="projects">
              <h2 className="projects__heading">things i've made.</h2>
              <img src={Flowers} alt="Flowers" className="projects__flowers flowers"/>
              <div className="projects__display">
                  <div className="projects__display--main">
                      <img src={RectanglePolaroid} className="projects__display--main-polaroid" alt="Polaroid"/>
                      {this.state.projects[0] &&
                      <>
                          <h2 className="projects__display-name">{lastProject.name}</h2>
                          <img src={lastProject.hero} className="projects__display-hero" alt="Chawpsticks x Valorant Site"/>
                          <p className="projects__display-description">{lastProject.description}</p>
                      </>
                      }
                  </div>
                  <div className="projectqueue">
                      {this.state.projects.map(videoInfo => 
                            <ProjectQueue key={videoInfo.id} id={videoInfo.id} name={videoInfo.name} description={videoInfo.description} hero={videoInfo.hero}/>
                          )}
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Projects;