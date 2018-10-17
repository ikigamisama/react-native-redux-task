import React, { Component } from 'react'
import { AppRegistry, FlatList, StyleSheet,Text, View,Image, Alert, Platform,TouchableHighlight,RefreshControl,TextInput} from 'react-native'

export default class AddComponent extends Component {
  constructor(props){
      super(props);

      this.state = {
          newTaskName: ''
      }
  }
  render() {
    return (
      <View style={{
          backgroundColor:'tomato',
          flexDirection:'row',
          justifyContent:'flex-end',
          alignItems:'center',
          height:65
      }}>
        <TextInput style={{
            height:40,
            width:350,
            margin:10,
            padding:10,
            borderColor:'white',
            borderWidth:1,
            color:'white'
        }}
            keyboardType='default'
            placeholderTextColor='white'
            placeholder="Enter Task Name"
            autoCapitalize='none'
            onChangeText={
                (text) => {
                    this.setState({newTaskName:text})
                }
            }
        />
        <TouchableHighlight
            style={{marginRight:10}}
            underlayColor='blue'
            onPress={(event) => {
                if(!this.state.newTaskName.trim()){
                    return;
                }
                this.props.onClickAdd(this.state.newTaskName);

            }}
        >
            <Image style={{width:35,height:35}} source={require('../assets/img/icons-add.png')}/>
        </TouchableHighlight>
            
      </View>
    )
  }
}