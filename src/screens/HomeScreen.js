import React from 'react';
import { StyleSheet,Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';



export default function HomeScreen () {
  return (
    <View style={style.container}>
      <Text>Estimote Bluetooth Beacon</Text>

      <Image 
        source = {require('C:/Users/Noneh Jung/estimote-app/estimote/src/assets/estimote.jpg')}
        style={style.source}
        />


      <Button title="Search for Beacons" style={style.button} />

    </View>
  )
}




const style = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 10
  },
  button: {
    backgroundColor: '#C8A2C8'
  },
  source: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: 300,
    // height: 400,
},
  
})