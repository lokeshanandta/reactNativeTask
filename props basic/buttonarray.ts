
import React, {Component} from "react"
import {View, Text, TouchableOpacity} from "react-native"

export default class CustomButton extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <TouchableOpacity style={{height:this.props.height,width:this.props.width,backgroundColor:this.props.backgroundcolor,alignItems:"center"}} onPress={()=>this.props.handleClick(this.props.item)}>
      <Text style={{color:this.props.color}}>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}
