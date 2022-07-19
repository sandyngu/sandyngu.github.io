import React from 'react';
import axios from 'axios';
import Flowers from '../../assets/images/flowers3.png';
import RectanglePolaroid from '../../assets/images/rectangle-polaroid.png';
import ProjectQueue from '../ProjectQueue/ProjectQueue'
import './projects.scss';

class Projects extends React.Component {

  state={
    projects:[],
    heroProject:[]
  }

  componentDidMount() {
    axios.get('http://localhost:5000/projects')
    .then(res => {
        console.log(res.data)
        this.setState({
            projects: res.data,
            heroProject: res.data[res.data.length-1]
        });
        console.log(this.state.heroProject)
    })
    .catch(err => console.log(err))
  }

  updateHero = (id) => {
    axios.get(`http://localhost:5000/projects/${id}`)
    .then(res => {  
      window.scrollTo(0, 0);
      
      this.setState({
        heroProject: [res.data]
      });
      console.log(res.data)
    })
    .catch(err => console.log(err));
  };
  
  componentDidUpdate(prevProps) {
    
    if (prevProps.params !== this.props.params) {
      this.updateHero(this.props.params.id);
    };
  };
  
  render() {
    const lastProject = this.state.projects[this.state.projects.length-1]

    return (
      <div className="section" id="projects">
          <p className="title" style={{display: 'none'}}>projects</p>
          <div className="parallax parallax3">
              <h2 className="projects__section-title box-title">creations</h2>
              <div className="projects__section-box title-box"></div>
          </div>
          <div className="projects">
              <h2 className="projects__heading">things i've made.</h2>
              <img src={Flowers} alt="Flowers" className="projects__flowers flowers"/>

      {/* MAIN HERO DISPLAY */}
              
              <div className="projects__display">
                  <div className="projects__display--main">
                      <img src={RectanglePolaroid} className="projects__display--main-polaroid" alt="Polaroid"/>
                      {this.state.projects[0] &&
                      <>
                          <h2 className="projects__display-name">{this.state.heroProject.name}</h2>
                          <img src={this.state.heroProject.hero} className="projects__display-hero" alt="Chawpsticks x Valorant Site"/>
                          <p className="projects__display-description">{this.state.heroProject.description}</p>
                      </>
                      }
                  </div>

          {/* SIDE DISPLAY */}

                  <div className="projectqueue">
                      {this.state.projects.map(videoInfo => 
                            <ProjectQueue key={videoInfo.id} id={videoInfo.id} name={videoInfo.name} description={videoInfo.description} hero={videoInfo.hero} heroProject={this.state.heroProject} updateHero={this.updateHero}/>
                          )}
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Projects;