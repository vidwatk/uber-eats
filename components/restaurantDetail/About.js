import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
  name: 'UI helper restaurant',
  image: "https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM=",
  price: "££",
  reviews: "3213",
  rating: 3.7,
  categories: [{title: "Indian"}, {title: "Comfort Food"}]
};

const {name, image, price, reviews, rating, categories} = yelpRestaurantInfo

const formattedCategories = categories.map((cat) => cat.title).join('  |  ');
const description = `${formattedCategories} ${price ? '  |  ' + price : ""} ${rating} (${reviews} + )`


export default function About() {
  return (
    <View>
      {<RestaurantImage image={image} /> }
      {<RestaurantName name={name}/>}
      {<RestaurantDescription description={description}/>}
    </View>
  )
}


const RestaurantImage = (props) => (
    <Image source={{uri:  props.image}} style= {{width: '100%', height: 180}}/>
)

const RestaurantName = (props) => (
    <Text
        style= {{
            fontSize:29,
            fontWeight: '600',
            marginTop: 10,
            marginHorizontal:15,
        }}
    >{props.name}</Text>
)

const RestaurantDescription = (props) =>(
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.2
    }}>{props.description}</Text>
)