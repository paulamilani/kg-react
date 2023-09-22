import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./src/view/screen/home/index";
import Avatar from "./src/view/screen/avatar/index";
import Ranking from "./src/view/screen/ranking/index";


const Tab = createBottomTabNavigator();

export default function App() {
return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ 
          tabBarLabel: 'Home', 
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ), 
        }} 
      />
      <Tab.Screen 
        name="Avatar" 
        component={Avatar}
        options={{
          tabBarLabel: 'Avatar',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} 
        />
      <Tab.Screen 
        name="Ranking" 
        component={Ranking} 
        options={{
          tabBarLabel: 'Ranking',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="rocket" color={color} size={26} />
          ),
        }} 
        />
    </Tab.Navigator>
  </NavigationContainer>
);
}