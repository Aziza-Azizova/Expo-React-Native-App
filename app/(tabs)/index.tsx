import { styles } from '@/assets/styles';
import { travelNews } from '@/data';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native';


const App = () => {
  const [data, setData] = useState(travelNews);
  const [refreshing, setRefreshing] = useState(false);
  type ItemProps = { id: string, title: string, description: string, img: string };

  const Item = ({ id, title, description, img }: ItemProps) => (
    <View style={styles.item}>
      <Link href={{ pathname: '/news-item/[id]', params: { id } }}>
        <View>
          <Text style={styles.title}> {title}</Text>
          <Image source={{ uri: img }} style={styles.img} />
        </View>
      </Link>
      <Text numberOfLines={3} style={styles.descr}>
        {description}
      </Text>
    </View>
  );

  const onRefresh = () => {
    setRefreshing(true);
    
    setTimeout(() => {
      setData(travelNews);
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>NEWS FOR  TODAY</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item id={item.id} title={item.title} description={item.description} img={item.img} />}
        keyExtractor={item => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};


export default App;