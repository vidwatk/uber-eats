import { View, Text } from "react-native";
import HeaderTabs from "./components/HeaderTabs";
import Home from "./screens/Home";
import {SafeAreaView} from 'react-native-safe-area-context';  


export default function App() {
  return(
    <SafeAreaView>
      <HeaderTabs />
    </SafeAreaView>
  );
}
