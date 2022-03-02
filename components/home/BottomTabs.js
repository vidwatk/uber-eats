import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View style={{ flexDirection: "row", margin: 10, marginHorizontal: 30, justifyContent: "space-between" }}>
      <Icon icon='home' text='Home' /> 
      <Icon icon='bread-slice' text='Eat' />
      <Icon icon='procedures' text='Sleep' />
      <Icon icon='hand-middle-finger' text='Rave' />
      <Icon icon='recycle' text='Repeat' />
    </View>
  )
}

const Icon =(props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5 name={props.icon} size={22} style={{
                marginBottom: 3, alignSelf: 'center',
            }} />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)