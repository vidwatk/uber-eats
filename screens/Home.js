import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/BottomTabs';


const YELP_API_KEY = "Tq_QYeUvgXhbDiBQru5ja5AfBndqf0NnFOrTek5h1YvBHEFhW8fUOOj-Yt9SRUArXS3wCtkNI8wGbS_wenkUcF8C-FYaA6rVHPaPFHCF-cqmDO1K6xe1ou_7Xr4bYnYx"

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants)
  const [city, setCity] = useState("New York")
  const [activeTab, setActiveTab] = useState("Delivery")

  const getRestaurantsFromYelp = () => {
    const yelpUrl= `https://api.yelp.com/v3/businesses/search?restaurants&location=${city}`


  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };
    

    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())  
    .then(json => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    //.then(json => setRestaurantData(json.businesses))
  };

  // getting the details from the api and rendering them on the screen
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab])

  return (
    <SafeAreaView style= {{backgroundColor: '#bfbfbf', flex: 1}}>
        <View style= {{ backgroundColor: 'white', padding: 15 }}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <SearchBar cityHandler={setCity} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData= {restaurantData}  />  
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}