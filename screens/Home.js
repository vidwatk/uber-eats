import { View, Text, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';


const YELP_API_KEY = "Tq_QYeUvgXhbDiBQru5ja5AfBndqf0NnFOrTek5h1YvBHEFhW8fUOOj-Yt9SRUArXS3wCtkNI8wGbS_wenkUcF8C-FYaA6rVHPaPFHCF-cqmDO1K6xe1ou_7Xr4bYnYx"

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants)
  const getRestaurantsFromYelp = () => {
    const yelpUrl= "https://api.yelp.com/v3/businesses/search?restaurants&location=Manchester"


  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };
    

    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())  
    .then(json => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    //getRestaurantsFromYelp();
  }, [])

  return (
    <SafeAreaView style= {{backgroundColor: '#bfbfbf', flex: 1}}>
        <View style= {{ backgroundColor: 'white', padding: 15 }}>
            <HeaderTabs/>
            <SearchBar  />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData= {restaurantData}  />  
      </ScrollView>
    </SafeAreaView>
  )
}