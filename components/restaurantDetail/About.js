import { View, Text, Image } from 'react-native'
import React from 'react'

const image = "https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM=";
const title = "UI helper restaurant"
const description = "Vietnamese | Comfort food  |  ££  |  4: stars  |  (3213+)";


export default function About() {
  return (
    <View>
      {<RestaurantImage image={image} /> }
      {<RestaurantTitle title={title}/>}
      {<RestaurantDescription description={description}/>}
    </View>
  )
}


const RestaurantImage = (props) => (
    <Image source={{uri:  props.image}} style= {{width: '100%', height: 180}}/>
)

const RestaurantTitle = (props) => (
    <Text
        style= {{
            fontSize:29,
            fontWeight: '600',
            marginTop: 10,
            marginHorizontal:15,
        }}
    >{props.title}</Text>
)

const RestaurantDescription = (props) =>(
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.2
    }}>{props.description}</Text>
)