import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem, Button, Image } from 'native-base'
import {newsData} from '../../assets/newsData'
import NewsComponent from '../newsComponent'
 
const News = () => {
  const articles = newsData.articles;

  return(
    <View style={{flex: 1}}>
      <NewsComponent/>
    </View>
  )
}
export default News;
