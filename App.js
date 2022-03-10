import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

import NewScreen from './src/screens/NewScreen';


import Images from './src/screens/Images';


import { Icon } from 'react-native-elements';
import { StyleSheet, View, Text} from 'react-native';




















const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      
      
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#CDB3D4'
            },
                headerTintColor: '#fff'
            }} 
          initialRouteName="Home">




        
        
        {/* <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#B399D4'
            },
                headerTintColor: '#fff'
            }}
          
          /> */}
          




          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({navigation}) => ({
                headerRight: () => (
                    <Icon 
                    name="plus" 
                    type="feather" 
                    color="#fff"
                    style={style.headerIcon}
                                        onPress={() => navigation.navigate('Localization')}
                />
              )
            })}
        />



        <Stack.Screen name="Localization" component={NewScreen} />



        <Stack.Screen name="Image" component={Images} />
















      </Stack.Navigator>
    </NavigationContainer>
  );
}






const style = StyleSheet.create({
  headerIcon: {
    marginRight: 10
  }
});