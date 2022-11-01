import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import TechStacks from '../TechStacks/TechStacks';
import Flowers from '../../assets/images/flowers3.png';
import RectanglePolaroid from '../../assets/images/rectangle-polaroid.png';
import Dots from '../../assets/images/dots.png';
import ProjectQueue from '../ProjectQueue/ProjectQueue';
import Paper from '../../assets/images/paper.png';
import Postit from '../../assets/images/postit.png';
import './projects.scss';

class Projects extends React.Component {

  state={
    projects:[],
    heroProject:[]
  }

  componentDidMount() {
    axios.get('http://localhost:5000/projects')
    .then(res => {
        let a = res.data
        let b = a.slice().reverse()
        this.setState({
            projects: b,
            heroProject: res.data[res.data.length-1]
        });
    })
    .catch(err => console.log(err))
  }

  updateHero = (id) => {
    const updatedProject = this.state.projects.find(project => project.id === id)

    this.setState({
      heroProject: updatedProject
    })
  };

  render() {
    
    var scrolled=0;
   
              $(".projects__more").on("click" ,function(){
                  scrolled=scrolled+799;
                  $(".projectqueue").animate({
                          scrollTop:  scrolled
                  });
              });
              
              $(".clips__button--back").on("click" ,function(){
                  scrolled=scrolled-1897;
                  $(".clips__video-container").animate({
                          scrollTop:  scrolled
                  });
                  window.scrollTo(0,850);
              });
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
                      <img src={Paper} className="projects__paper" alt="Ripped Paper"/>
                      <img src={Postit} className="projects__postit" alt="Ripped Paper"/>
                      <div className="projects__postit-title">TechStacks</div>
                      {this.state.projects[0] &&
                      <>
                          {this.state.heroProject.url ? 
                          <h2 className="projects__display-name"><a href={this.state.heroProject.url} target="_blank" rel="noreferrer" className="projects__display-link">{this.state.heroProject.name}</a> ← click me</h2>
                          :<h2 className="projects__display-name">{this.state.heroProject.name}</h2> 
                          }
                          
                          <img src={this.state.heroProject.hero} className="projects__display-hero" alt="Project"/>
                          <div className="projects__display-description">{this.state.heroProject.description}</div>  
                          <div className="projects__display-date">{this.state.heroProject.date}</div>                      
                            {this.state.projects[0] &&
                                <TechStacks heroProject={this.state.heroProject} />}
                      </>
                      }
                  </div>

          {/* SIDE DISPLAY */}

                  <div className="projectqueue">
                      {this.state.projects.map(videoInfo => 
                            <ProjectQueue key={videoInfo.id} id={videoInfo.id} name={videoInfo.name} description={videoInfo.description} hero={videoInfo.hero} heroProject={this.state.heroProject} updateHero={this.updateHero}/>
                          )}
                  </div>
                  <div className="projects__more-container">
                      <img src={Dots} className="projects__more" alt="Ellipses"/>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Projects;