import React from 'react';
import axios from 'axios';
import Flowers from '../../assets/images/flowers3.png';
import BrainStation from '../../assets/images/brainstation.png';
import Typewriter from '../../assets/images/typewriter2.png';
import Paper from '../../assets/images/paper3a.png';
import './comments.scss';

class Comments extends React.Component {

  state = {
    comments: [],
    shownComment:[],
    currentID: 1
  }

  componentDidMount() {
    axios.get('http://localhost:5000/comments')
        .then(res => {
            this.setState({
                comments: res.data,
                shownComment: res.data[0]
            });
            setInterval(() => { 
              console.log(this.state.comments) 
              let a = [this.state.comments]   
              a.shift();
              console.log(a)      
              // this.setState({
              //   comments: [a]
              // })
            }, 5000)
        })
        .catch(err => console.log(err));
      };

    render () {

    return (
      <div className="section" id="comments">
          <p className="title" style={{display: 'none'}}>comments</p>
          <div className="parallax parallax5">
              <h2 className="comments__section-title box-title">feedback</h2>
              <div className="comments__section-box title-box"></div>
          </div>
          <div className="comments">
              <h2 className="comments__heading">say something nice.</h2>
              <img src={Flowers} alt="Flowers" className="comments__flowers flowers"/>
              <div className="comments__box">
                  <img src={Typewriter} className="comments__typewriter" alt="Typewriter" />
                  <form className="comments__form" onSubmit={(e) => this.typeWriter(e)}>
                      <textarea className="comments__form-input comments__form-input--comment" placeholder="Leave a few words..."></textarea>
                      <br className="comments__form-break"/><input className="comments__form-input comments__form-input--name" placeholder="Signature"></input>
                      <br className="comments__form-break"/><input className="comments__form-input comments__form-input--position" placeholder="Title/Position"></input>
                      <br className="comments__form-break"/><br className="comments__form-break"/><button className="comments__form-button" type="submit">Submit</button>
                  </form>
                  <div className="comments__box-paper-container">
                      <img src={Paper} className="comments__box-paper comments__box-paper1" alt="Ripped Paper"/>
                  </div>
              </div>
              <div className="comments__box-comments">
                  {this.state.comments !== null &&
                  // <>
                  //       {this.state.comments.map(comment => 
                  //       <>
                  //       <div className="comments__container" key={comment.id}>
                  //             <p className="comments__text comments__text-text" id="text">"{comment.comment}"</p>
                  //             <p className="comments__text comments__text-name">~ {comment.name}</p>
                  //             <p className="comments__text comments__text-position">{comment.position} <img src={BrainStation} alt="BrainStation Logo" className="comments__logo"/></p>
                  //       </div>
                  //       <p className="comments__text comments__text">Page: {comment.id} of 4</p>
                  //       </>
                  //       )}
                  // </>
                  <>
                  <div className="comments__container" key={this.state.shownComment.id}>
                      <p className="comments__text comments__text-text" id="text">"{this.state.shownComment.comment}"</p>
                      <p className="comments__text comments__text-name">~ {this.state.shownComment.name}</p>
                      <p className="comments__text comments__text-position">{this.state.shownComment.position} <img src={BrainStation} alt="BrainStation Logo" className="comments__logo"/></p>
                  </div>
                  <p className="comments__text comments__text">Page: {this.state.shownComment.id} of 4</p>
                  </>
                  }
              </div>
          </div>
      </div>
    )
  }
}

export default Comments;