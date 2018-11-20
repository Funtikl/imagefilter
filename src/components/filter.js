import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      bw:100,
      sepia:100,
       contrast:100,
       brightness:100, 
    };
  }
  bwfilterHandler = (e) => {
    this.setState({
        bw:e.target.value,
    })
}
contrastHandler = (e) => {

    this.setState({
        contrast:e.target.value,
    })
}
brightHandler = (e) => {
    this.setState({
        brightness:e.target.value
    })
}
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row", marginTop: -490 }}>
        <img
          src="https://amp.businessinsider.com/images/578e9e4588e4a77c708b8db1-1334-1000.jpg"
          alt="filtered"
          style={{filter:`grayscale(${this.state.bw}%) contrast(${this.state.contrast}%) brightness(${this.state.brightness}%)`, margin: 20,
          width: 500,
          height: 400,
          resizeMode: "contain",
          display:'flex',
          flexBasis:'50%',
        }}
        />
        <p style={{position:'absolute', marginTop:430, marginLeft:70}}>Black And White</p>
        <input type="range" min='0' max='200' style={{position:'absolute', marginTop:450, marginLeft:70}} onChange={this.bwfilterHandler}  />
        <p style={{position:'absolute', marginTop:470, marginLeft:70}}>Contrast</p>
        <input type="range" min='0' max='200' style={{position:'absolute', marginTop:490, marginLeft:70}} onChange={this.contrastHandler}  />
        <p style={{position:'absolute', marginTop:510, marginLeft:70}}>Brightness</p>
        <input type="range" min='0' max='200' style={{position:'absolute', marginTop:530, marginLeft:70}} onChange={this.brightHandler}  />
      </div>
      
    );
  }
}
export default Filter;
