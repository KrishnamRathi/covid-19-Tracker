import 'react-native-gesture-handler'
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import News from './news'
import Tracker from './tracker'
import { Button, Content, Card, CardItem, Body } from 'native-base'




function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Content padder>
                <Card style={[{ height: 150, width: '100%', borderRadius: 6 }, styles.cardShadow]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Tracker')}>
                    <CardItem style={{ borderRadius: 6}}>
                        <Body style={{ flex:1}}>
                            <Image source={require('../../assets/images/tracker.png')}
                                style={{height: 80, width: 80, alignSelf: 'center'}}
                            />
                            <Text note style={{alignSelf: 'center', marginTop: 15, fontWeight: 'bold'}} >Tracker</Text>
                        </Body>
                    </CardItem>
                    </TouchableOpacity>
                </Card>
                <Card style={[{ height: 150, width: '100%', borderRadius: 6 }, styles.cardShadow]}>
                    <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    <CardItem style={{ borderRadius: 6}}>
                        <Body style={{ flex:1}}>
                            <Image source={require('../../assets/images/news.png')}
                                style={{height: 80, width: 80, alignSelf: 'center'}}
                            />
                            <Text note style={{alignSelf: 'center', marginTop: 15, fontWeight: 'bold'}} >News</Text>
                        </Body>
                    </CardItem>
                    </TouchableOpacity>
                </Card>
            </Content>
        </View>
    );
}

const Stack = createStackNavigator();

function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Covid-19" component={HomeScreen} />
                <Stack.Screen name="News" component={News} />
                <Stack.Screen name="Tracker" component={Tracker} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;



const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})