import React, { Component } from "react";
import axios from 'axios';
// import * as firebase from 'firebase';
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }
  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
    if(this.state.selectedFile === null){
      console.log('null')
    }
   axios.post('http://localhost:2000/upload', this.state.selectedFile[0]).then((res)=>{
    console.log(res);
   })
  };

  render() {
    return (
      <div className="Upload" style={styles.Upload}>
        <h1 style={styles.text}>Upload image and filter it!</h1>
        <input
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
