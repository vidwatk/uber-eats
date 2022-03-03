import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';


const foods = [
    {
        title: "Lasagna",
        description: "With idk, tomato and bechamel",
        price: "£459343",
        image: "https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Homemade-Ground-Beef-Lasagna-with-Melted-Cheese.png"
    },
    {
        title: "Margherita",
        description: "Mozzieee, basil and Tomato",
        price: "£45983429",
        image: "https://cdn.shopify.com/s/files/1/0205/9582/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1644590192&width=800"
    },
    {
        title: "Seawich",
        description: "Wheat bread and sea water",
        price: "£4",
        image: "https://www.sheknows.com/wp-content/uploads/2018/08/obkrnb30oowvz6gofd1b.jpeg"
    },
    {
        title: "Vegan shit",
        description: "Overprized food (barely edible) that tastes like shit",
        price: "£4593433243243231424",
        image: "https://realfood.tesco.com/media/images/1400x919-CauliflowerSpinachCurry-d6bf5748-6d7f-402f-96df-53ad36d0802d-0-1400x919.jpg"
    }
];

const styles = StyleSheet.create({
    menuItemStyle : {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: "800",
    }
})

export default function MenuItems() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
        {foods.map((food, index) => (
        <View key = {index}>
            <View style={styles.menuItemStyle}>
                <FoodInfo food={food} />
                <FoodImage food={food} /> 
            </View>
            <Divider width={0.5} orientation="vertical"/>
        </View>
        ))}
    </ScrollView>
  );
}


const FoodInfo = (props) => (
    <View style = {{
        width: 250, justifyContent: 'space-evenly'
    }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image source = {{uri: props.food.image}} style={{width: 100, height: 100, borderRadius: 8}} />
    </View>
);