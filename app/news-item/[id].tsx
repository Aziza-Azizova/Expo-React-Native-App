import { itemStyles } from '@/assets/styles';
import { travelNews } from '@/data';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

function newsItem() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const newsItem = travelNews.find(item => item.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: newsItem ? newsItem.title : 'News Item'
    });
  }, [navigation, newsItem]);


  return (
    <ScrollView style={itemStyles.container}>
      <View style={itemStyles.item}>
        <Text style={itemStyles.title}> {newsItem?.title}</Text>
        <Image source={{ uri: newsItem?.img }} style={itemStyles.img} />
        <Text style={itemStyles.descr}> {newsItem?.description} </Text>
        <Text style={itemStyles.descr}> {newsItem?.info} </Text>
        <Text style={itemStyles.descr}> {newsItem?.text} </Text>
        <Text style={itemStyles.descr}> {newsItem?.footer} </Text>
      </View>
    </ScrollView>
  )
}

export default newsItem