import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit'
import { Dimensions } from "react-native";



const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#dcf5ef",
    backgroundGradientFromOpacity: 0.2,
    backgroundGradientTo: 'green',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 20, 0, ${opacity})`,
    barPercentage: 1.5,
    useShadowColorFromDataset: false // optional
};


export default class Chart extends Component {
    constructor(props){
        super(props)
    }

    
    render() {
        return (
            <View>
                <BarChart
                    style={styles.cardShadow}
                    data={{
                        labels: ["Confirmed", "Deaths", "Recovered"],
                        datasets: [ {data: [this.props.confirmed, this.props.deaths, this.props.recovered]} ],
                    }}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    withVerticalLabels={true}
                    fromZero={true}
                />
            </View>
        );
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
  
