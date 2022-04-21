import React from 'react';
import{Text,View,Image,TouchableOpacity} from 'react-native'
export default class calculator extends React.Component{
constructor(props){
  super(props)
}

  render(){
    // console.log("this.propdjbkfdfds-->",this.props)
    return(<View>
  
<View style={{backgroundColor:"#0d0d0d"}}>
    <View style={{flexDirection:"row",}}>
    <View><Text style={{color:"white",width:84,marginLeft:20}}>Calculator</Text></View>
    <View><Text style={{color:"white",width:110}}>Exchange Rate</Text></View>
    <View><Text style={{color:"white"}}>Unit conventer</Text></View>
    </View>
    
    // <View style={this.props.cointainer5}><Text style={{color:"white",fontSize:20}}>{this.props.add}</Text>
    // </View>
    // <View style={{height:40,width:350}}><Text style={{color:"white"}}>{this.total}</Text></View>
    </View>
   
    </View>)}
}

