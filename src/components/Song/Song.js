
import React, { Component } from 'react';


class Song extends Component {


    
  
  render() {
    return (
      <h6 className="c1" style={{ color: "red"}}>I like a {this.props.Song} writen by : {this.props.Artist}</h6>
    );
  }
}


export default Song;