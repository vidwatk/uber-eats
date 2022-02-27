import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick Up"
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Alcohol"
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Shit"
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Usain"
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Cheap Stuff"
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Not Alcohol"
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Cakes"
    }
];

export default function Categories() {
    return (
      <View
        style={{
          marginTop: 5,
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingLeft: 20,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item,
           index) => (
            <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }