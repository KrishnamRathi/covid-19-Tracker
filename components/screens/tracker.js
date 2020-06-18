import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, FlatList, SafeAreaView } from 'react-native';
import { Button, Content, Picker, Item, Form, Icon, Card, CardItem, Body, List, ListItem, Left, Right, Input } from 'native-base'
import COUNTRIES from '../../assets/countries'
import { ScrollView } from 'react-native-gesture-handler';
import ListI from '../newsComponent'
import Data from '../../assets/data'
import Chart from '../chart'


export default class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: '',
      isLoading: false,
      DATA: Data,
      showCountryData: false,
      selectedCountryInfo: {},
      searchResult: true
    };
  }

  componentDidMount() {

    // fetch('https://api.covid19api.com/summary')
    //   .then(res => res.json())
    //   .then(data => this.setState({ DATA: data, isLoading: false }))
    //   .catch(err => console.log(err))

  }

  handleSearch(){
    if(arr.length()>0) {
      this.setState({
        showCountryData: true, 
        selectedCountryInfo: arr[0]
      })
    }
    console.log('arr')
  }




  render() {
    const {DATA, selectedCountryInfo, selectedCountry, showCountryData} = this.state
    const TotalConfirmed = !showCountryData ?DATA.Global.TotalConfirmed : selectedCountryInfo.TotalConfirmed
    const TotalDeaths = !showCountryData?DATA.Global.TotalDeaths : selectedCountryInfo.TotalDeaths
    const TotalRecovered = !showCountryData?DATA.Global.TotalRecovered : selectedCountryInfo.TotalRecovered
    const NewConfirmed = !showCountryData?DATA.Global.NewConfirmed : selectedCountryInfo.NewConfirmed
    const NewDeaths = !showCountryData?DATA.Global.NewDeaths : selectedCountryInfo.NewDeaths
    const NewRecovered = !showCountryData?DATA.Global.NewRecovered : selectedCountryInfo.NewRecovered

    
    if (this.state.isLoading)
      return (<View><Text>Loading ...</Text></View>)
    else {
      return (
        <ScrollView style={{ backgroundColor: 'white'}}>
          <View searchBar style={[{ margin: 10 }]}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search country"
               onChangeText ={text => this.setState({selectedCountry: text})}
              />
            <Icon name="ios-map" />
          </Item>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Button style={[{ height: 30, width: 60, borderRadius: 5, justifyContent: 'center' }, styles.cardShadow]}
              onPress={() => {DATA.Countries.filter( country => country.Country.toLowerCase().includes(selectedCountry.toLowerCase())).length>0 ? this.setState({
                  showCountryData: true,
                  searchResult: true,
                  selectedCountryInfo: DATA.Countries.filter( country => country.Country.toLowerCase().includes(selectedCountry.toLowerCase()))[0]
              }): this.setState({
                searchResult: false
              }) }}
            >
              <Text style={{ textAlign: 'center', color: 'white' }}>Search</Text>
            </Button>
          </View>
            {this.state.searchResult? <View></View>: 
              <View>
                <Text style={{fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginTop: 5, color: 'magenta'}}>Result Not Found !</Text>
              </View>
            }
          <View style={{ flexDirection: 'column',  alignContent: 'center' }}>
              <Text style={{textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>{showCountryData ? selectedCountryInfo.Country: 'Global'}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', display: 'flex', flexWrap: 'wrap', marginTop: 20 }}>
              <Card style={[{ height: 120, width: '40%', borderRadius: 6 }, styles.cardShadow]}>
                <TouchableOpacity>
                  <CardItem style={{ borderRadius: 6 }}>
                    <Body style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }} >Total Confirmed </Text>
                      {/* <Image source={require('../../assets/images/increase.png')} style={{ height: 50, width: 50 }} /> */}
                      <View style={{ alignItems: 'center' }} >
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red' }} >{TotalConfirmed}</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'red' }} > +{NewConfirmed}</Text>
                      </View>
                    </Body>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={[{ height: 120, width: '40%', borderRadius: 6 }, styles.cardShadow]}>
                <TouchableOpacity>
                  <CardItem style={{ borderRadius: 6 }}>
                    <Body style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red'}} >Total {'\n'} Deaths </Text>
                      {/* <Image source={require('../../assets/images/increase.png')} style={{ height: 50, width: 50 }} /> */}
                      <View style={{ alignItems: 'center' }} >
                      <View>
                          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red' }} >{TotalDeaths}</Text>
                          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'red' }} > +{NewDeaths}</Text>
                        </View>
                      </View>
                    </Body>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={[{ height: 120, width: '40%', borderRadius: 6 }, styles.cardShadow]}>
                <TouchableOpacity>
                  <CardItem style={{ borderRadius: 6 }}>
                    <Body style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }} >Total Recovered </Text>
                      {/* <Image source={require('../../assets/images/increase.png')} style={{ height: 50, width: 50 }} /> */}
                      <View style={{ alignItems: 'center' }} >
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'green' }} >{TotalRecovered}</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'green' }} > +{NewRecovered}</Text>
                      </View>
                    </Body>
                  </CardItem>
                </TouchableOpacity>
              </Card>
            </View>
          </View>
          <View style={[{ borderRadius: 10, alignItems: 'center', justifyContent: 'center', margin: 10}]}>
            <Chart confirmed={TotalConfirmed} deaths={TotalDeaths} recovered={TotalRecovered}/>
          </View>
        </ScrollView>
      );
    }

  }
}

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
  },
  listStyle: {
    height: 30,
    width: '100%',
    margin: 10
  }
})

