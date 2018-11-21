import React, { Component } from "react";
import axios from 'axios';
// import * as firebase from 'firebase';
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: 'https://amp.businessinsider.com/images/578e9e4588e4a77c708b8db1-1334-1000.jpg'
    };
  }
  fileChangedHandler = event => {
    event.preventDefault();
    this.setState({ selectedFile: event.target.files[0] });
  };


  uploadHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", this.state.selectedFile,'image.jpg')
   axios.post('http://localhost:2000/upload', formData).then((res)=>{
    console.log('done');
   }).catch((err)=>{
     console.log(err)
   })
  };
 
  render() {
    return (
      <div className="Upload" style={styles.Upload}>
        <h1 style={styles.text}>Upload image and filter it!</h1>
        <input
        ref={this.input}
        name="image"
          style={styles.inputButton}
          type="file"
          onChange={this.fileChangedHandler}/>
        <button style={styles.button} onClick={this.uploadHandler}>
          Upload here!
        </button>
      </div>
    );
  }
}

const styles = {
  Upload: {
    height: "600px",
    width: "800px",
    margin: "50px",
    marginLeft: "230px"
  },
  text: {
    borderStyle: "solid",
    borderWidth: "2px 0px 0px 0px",
    padding: "10px"
  },
  button: {
    marginLeft: "20px"
  }
};

export default Upload;
