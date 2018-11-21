import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.image)
    this.state = {
      image: 'https://timedotcom.files.wordpress.com/2015/09/gettyimages-463770400.jpg',
      bw: 0,
      sepia: 0,
      contrast: 100,
      brightness: 100,
      dropShadow: "",
      hueRotate: "",
      saturate: 100,
      url: "",

      display: "flex",
      flexBasis: "50%",

      flexDirection: "row"
    };
  }
  uploadMe = e => {
      this.setState({
          image:this.props.image
      })
  }
  bwfilterHandler = e => {
    this.setState({
      bw: e.target.value
    });
  };
  contrastHandler = e => {
    this.setState({
      contrast: e.target.value
    });
  };
  brightHandler = e => {
    this.setState({
      brightness: e.target.value
    });
  };
  makeMeBW = e => {
    this.setState({
      bw: 100,
      contrast: 80,
      brightness: 110
    });
  };
  makeMeSaturation = e => {
        this.setState({
            bw: 0,
      contrast: 85,
      brightness: 85,
      saturate:150
        })
}
makeMeShine = e => {
    this.setState({
        bw: 0,
        contrast: 100,
        brightness: 135,
        saturate:100,
    })
}
makeMeDarker = e  => {
    this.setState({
        bw: 0,
        contrast: 160,
        brightness: 77,
        saturate:100,
    })
}
makeMeContrasterBW = e => {
    this.setState({
        bw: 100,
        contrast: 130,
        brightness: 120,
        saturate:0,
    })
}
  render() {
    return (
      <div
        style={{
          display: `${this.state.display}`,
          flexDirection: `${this.state.flexDirection}`,
          marginTop: -490
        }}
      >
        <img
            src={require('../uploads/image.jpeg')} 
          alt="filtered"
          style={{
            filter: `grayscale(${this.state.bw}%) contrast(${this.state.contrast}%) brightness(${this.state.brightness}%) saturate(${this.state.saturate}%)` ,
            margin: 20,
            width: 500,
            height: 400,
            resizeMode: "contain",
            display: "flex",
            flexBasis: "50%"
          }}
        />
        <p style={{ position: "absolute", marginTop: 430, marginLeft: 70 }}>
          Black And White
        </p>
        <input
          type="range"
          min="0"
          max="200"
          style={{ position: "absolute", marginTop: 450, marginLeft: 70 }}
          onChange={this.bwfilterHandler}
        />
        <p style={{ position: "absolute", marginTop: 470, marginLeft: 70 }}>
          Contrast
        </p>
        <input
          type="range"
          min="0"
          max="200"
          style={{ position: "absolute", marginTop: 490, marginLeft: 70 }}
          onChange={this.contrastHandler}
        />
        <p style={{ position: "absolute", marginTop: 510, marginLeft: 70 }}>
          Brightness
        </p>
        <input
          type="range"
          min="0"
          max="200"
          style={{ position: "absolute", marginTop: 530, marginLeft: 70 }}
          onChange={this.brightHandler}
        />
        <button
          style={{
            backgroundImage:`url(${this.state.image})`,
            backgroundSize:'cover',
            display: "flex",
            flex: 2,
            backgroundColor: "#222",
            color: "white"
          }}
          onClick={this.makeMeBW}
        >
          <h2>BWorld</h2>
        </button>
        <button
          style={{
            backgroundImage:`url(${this.state.image})`,
            backgroundSize:'cover',
            display: "flex",
            flex: 2,
            backgroundColor: "black",
            color: "white"
          }}
          onClick={this.makeMeSaturation}
        >
          <h2>SaturateMe</h2>
        </button>
        <button
          style={{
            backgroundImage:`url(${this.state.image})`,
            backgroundSize:'cover',
            display: "flex",
            flex: 2,
            backgroundColor: "black",
            color: "white"
          }}
          onClick={this.makeMeShine}
        >
          <h2>Shine</h2>
        </button>
        <button
          style={{
            backgroundImage:`url(${this.state.image})`,
            backgroundSize:'cover',
            display: "flex",
            flex: 2,
            backgroundColor: "black",
            color: "white"
          }}
          onClick={this.makeMeDarker}
        >
          <h2>DarkMode</h2>
        </button>
        <button
          style={{
            backgroundImage:`url(${this.state.image})`,
            backgroundSize:'cover',
            display: "flex",
            flex: 2,
            color: "white"
          }}
          onClick={this.makeMeContrasterBW}
        >
          <h2>ContrastBW</h2>
        </button>
      </div>
    );
  }
}
export default Filter;
