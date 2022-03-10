// import React, { Component } from 'react'
// import { Image } from 'react-native'

// const ImagesExample = () => (
//    <Image source = {require('C:/Users/Noneh Jung/estimote-app/estimote/src/assets/estimote.jpg')} />







// )
// export default ImagesExample





import React from 'react';
import { Text, View, Image } from 'react-native';

export default function Images () {
  return (
    <View>
      <Text>This is Image Screen</Text>
      <Image source = {require('C:/Users/Noneh Jung/estimote-app/estimote/src/assets/estimote.jpg')} />
    </View>
  )
}