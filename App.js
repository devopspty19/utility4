import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './screens/MapScreen';
import VideoScreen from './screens/VideoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FF6347',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen 
          name="Mapa" 
          component={MapScreen}
          options={{
            tabBarIcon: () => '🗺️',
            tabBarLabel: 'Mapa GPS',
          }}
        />
        <Tab.Screen 
          name="Video" 
          component={VideoScreen}
          options={{
            tabBarIcon: () => '🎥',
            tabBarLabel: 'Video',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
