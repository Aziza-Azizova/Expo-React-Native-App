import { styles } from '@/assets/styles';
import { news } from '@/data';
import React, { useState } from 'react';
import { Text, View, SectionList, Image, RefreshControl } from 'react-native';


const Sections = () => {
    const [data, setData] = useState(news);
    const [refreshing, setRefreshing] = useState(false);
    type ItemProps = { title: string, description: string, img: string };

    const Item = ({ title, description, img }: ItemProps) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Image source={{ uri: img }} style={styles.img} />
            <Text style={styles.descr}>{description}</Text>
        </View>
    );

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setData(news);
            setRefreshing(false);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item.title + index}
                renderItem={({ item }) => <Item title={item.title} description={item.description} img={item.img} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        </View>
    )
}

export default Sections;