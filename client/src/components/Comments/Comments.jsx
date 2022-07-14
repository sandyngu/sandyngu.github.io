import React from 'react';
import axios from 'axios';
import Flowers from '../../assets/images/flowers3.png';
import BrainStation from '../../assets/images/brainstation.png';
import './comments.scss';

class Comments extends React.Component {

  state = {
    comments: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/comments')
        .then(res => {
            console.log(res.data)
            this.setState({
                comments: res.data
            });
            console.log(this.state.comments)
        })
        .catch(err => console.log(err))
};

  render () {

    return (
      <div className="section">
          <div className="comments__wave comments__wave1">
            <svg viewBox="0 60 500 80" preserveAspectRatio="xMinYMin meet">
              <path className="comments__wave-svg comments__wave-svg1" d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
            </svg>
          </div>
          <div className="comments__wave comments__wave2">
            <svg viewBox="0 60 500 80" preserveAspectRatio="xMinYMin meet">
              <path className="comments__wave-svg comments__wave-svg2" d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
            </svg>
          </div>
          <p className="title" style={{display: 'none'}}>comments</p>
          <div className="parallax parallax5">
              <h2 className="comments__section-title box-title">feedback</h2>
              <div className="comments__section-box title-box"></div>
          </div>
          <div className="comments">
              <h2 className="comments__heading">say something nice.</h2>
              <img src={Flowers} alt="Flowers" className="comments__flowers flowers"/>
              <div className="comments__box">
                    {/* <form className="comments__box-form" onSubmit={(e) => this.typeWriter(e)}>
                        <label className="comments__form-label">Name:</label>
                        <br className="comments__form-break"/><input className="comments__form-input comments__form-input--name"></input>
                        <br className="comments__form-break"/><label className="comments__form-label">Position:</label>
                        <br className="comments__form-break"/><input className="comments__form-input comments__form-input--position"></input>
                        <br className="comments__form-break"/><label className="comments__form-label">Comment:</label>
                        <br className="comments__form-break"/><textarea className="comments__form-input comments__form-input--comment"></textarea>
                        <br className="comments__form-break"/><br className="comments__form-break"/><button className="comments__form-button" type="submit">Submit</button>
                    </form> */}
                    {this.state.comments !== null &&
                    <>
                        <div className="comments__box-comments">
                          <div className="comments__container">
                          {this.state.comments.map(comment => 
                              <>
                                <p className="comments__text comments__name">{comment.name} said...</p>
                                <p className="comments__text comments__text1" id="text">{comment.comment}</p>
                                <p className="comments__text comments__position">~ {comment.position} <img src={BrainStation} alt="BrainStation Logo" className="comments__logo"/></p>
                              </>
                              )}
                          </div>
                        </div>
                    </>
                    }
              </div>
          </div>
      </div>
    )
  }
}

export default Comments;