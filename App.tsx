import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/view/Home';
import Avatars from './src/view/Avatars';
import Ranking from './src/view/Ranking';
import JogoDaMemoria from './src/view/JogoDaMemoria';

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
          component={Avatars}
          options={{
            tabBarLabel: 'Avatar',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Game"
          component={JogoDaMemoria}
          options={{
            tabBarLabel: 'Game',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="nintendo-game-boy"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Ranking"
          component={Ranking}
          options={{
            tabBarLabel: 'Ranking',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="rocket" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
