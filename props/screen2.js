import React from 'react';
import{Text,View,Image,TouchableOpacity} from 'react-native'
import {buttonarray,styles} from './ButtonArray';
export default class Calculator1 extends React.Component{
constructor(props){
  super(props)
}

  render()
  {
    console.log("lok",this.props)
    return(
    <View style={{height:this.props.heigth,width:this.props.width,backgroundColor:this.props.backgroundColor,justifyContent:"center",alignItems:"center"}}>
  <TouchableOpacity
  onPress={()=>this.props.handledeleted(this.props.item)}>
  <Text style={{color:this.props.color}}>{this.props.name}</Text>
  </TouchableOpacity>
</View>
)}}
