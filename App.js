import { View, Text } from "react-native";
import HeaderTabs from "./components/home/HeaderTabs";
import Home from "./screens/Home";
import {SafeAreaView} from 'react-native-safe-area-context';  
import RestaurantDetail from "./screens/RestaurantDetail";


export default function App() {
  return <RestaurantDetail/>
}
