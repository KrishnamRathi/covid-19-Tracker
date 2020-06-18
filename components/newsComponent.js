import React from 'react';
import { View, Text, Image } from 'react-native';


const NewsComponent = () => {

    const url = {uri: "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png"}
    return (
        <View style={{ flex: 1 }}>
            <Image source={url} style={{ width: 200, height: 200 }} />
            <Text> {"title"} </Text>
        </View>
    )
};

export default NewsComponent;
