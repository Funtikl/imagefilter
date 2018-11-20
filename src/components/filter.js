import React, { Component } from "react";


class Filter extends Component {

    constructor(props){
        super(props);
        this.state = {
            image:null
        }
    }

    render(){
        return(
            <div>
            <div style={filters.imageSize1}>
            <img src='https://amp.businessinsider.com/images/578e9e4588e4a77c708b8db1-1334-1000.jpg' alt="filtered" style={filters.blackandwhite} />
            </div>
            <div style={filters.imageSize2}>
            <img src='https://amp.businessinsider.com/images/578e9e4588e4a77c708b8db1-1334-1000.jpg' alt="filtered" style={filters.brightSepia} />
            </div>
            </div>
        )
    }
}
const filters = {
    brightSepia:{
        filter:'sepia(100%)brightness(80%) contrast(140%)',
        flex: 1,
        width: 300,
        height: 400,
        resizeMode: 'contain'
    },
    blackandwhite:{
        filter:'grayscale(80%) brightness(120%)',
        flex: 1,
    width: 300,
    height: 400,
    resizeMode: 'contain'

    },
    imageSize1:{
        
        width:'50%',
        marginTop:"-450px",
        display:'flex',
        flexFlow:'row',
        flex:'1',
        backgroundColor:'black'
    },
    imageSize2:{
        width:'50%',
        marginTop:"-400px",
        display:'flex',
        flexFlow:'row',
        flex:'1',
        marginLeft:650
    }


}


export default Filter;