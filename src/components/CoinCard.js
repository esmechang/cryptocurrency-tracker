import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",        
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",        
    },
    image: {
        width: 35,
        height: 35,
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }
})

const { 
    container,
    image,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    percentChangePlus,
    percentChangeMinus
} = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_1d, percent_change_7d }) => {
    console.log('hello')
    return (
        <View style={container}>
            <View style={upperRow}>
                <Image
                    style={image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={coinSymbol}>{symbol} | </Text>
                <Text style={coinName}>{coin_name}</Text>
                    <Text style={coinPrice}>${price_usd} 
                </Text>
            </View>
            <View style={statisticsContainer}>

                <Text>1d:
                    <Text style={percent_change_1d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_1d} % </Text>
                </Text>
                <Text>7d:
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
                </Text>
            </View>
        </View>
    )
}

export default CoinCard;