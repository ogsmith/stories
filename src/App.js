import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import autoBind from 'react-autobind';
import Sound from 'react-sound';
import ReactPlayer from 'react-player'
import { Player } from 'video-react';

export default class App extends Component {
  constructor(props) {
  super(props);
  autoBind(this);

  this.state = {
    stories: "",
    sounds: "",
    backgrounds:"",

  };
}
  _newStory() {
    this.setState({
      sounds: "",
      stories:"",
      backgrounds:""
    });

    this._getStory();
    this._getSound();
    this._getBackground();
  }

  _getStory() {
    //get request = story
    let story = "";
    const story1 = "Story 1";
    const story2 = "Story 2";
    const story3 = "Story 3";
    let math = Math.floor(Math.random()*3);
    math = math+1;
    if(math == 1){
      story = story1;
    }
    if(math ==2){
      story = story2;
    }
    if (math ==3){
      story = story3;
    }

    this.setState({
      stories: story
    });
  }

  _getSound(){
    //get request = song
    //binaural beats
    let music = "";
    const music1 = "https://www.youtube.com/watch?v=jfFTT3iz740";
    const music2 = "https://www.youtube.com/watch?v=ysz5S6PUM-U";
    const music3 = "https://www.youtube.com/watch?v=HdzI-191xhU";
    let math = Math.floor(Math.random()*4);
    math = math+1
    if(math == 1){
      music = music1;
    }
    if(math == 2){
      music = music2;
    }
    if(math == 3){
      music = music3;
    }

    this.setState({
      sounds: music
    });
  }

  _getBackground(){
    //get request = video
    let bg = "";
    const bg1 = "https://www.youtube.com/watch?v=bdnHKdb-Oss";
    const bg2 = "https://www.youtube.com/watch?v=BzJJOyB6vok&t=1010s";
    const bg3 = "https://www.youtube.com/watch?v=bdnHKdb-Oss";
    let math = Math.floor(Math.random()*3);
    math = math + 2;
    console.log(math);
    if(math == 2){
      bg = bg1;
    }
    if(math == 3){
      bg = bg2;
    }
    if(math == 4){
      bg = bg3;
    }
    this.setState({
      backgrounds: bg
    });
  }

  render() {

    return (
      <div className="App">

        <p id="story_text">{this.state.stories}</p>

        <button id="styled_button" onClick={this._newStory}>
          New Story
        </button>

        <ReactPlayer
          id="fullscreen"
          url={this.state.backgrounds}
          playing
          muted
        />

        <ReactPlayer
          className='react-player'
          playing
          url={this.state.sounds}
          width='0%'
          height='0%'
        />

      </div>
    );
  }
}
