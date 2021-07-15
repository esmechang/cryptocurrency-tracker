import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData'
import CoinCard from './CoinCard'

class CryptoContainer extends Component {

    componentWillMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        console.log(crypto)
        return crypto.data.map((coin, index) => (
            <CoinCard
                key={index}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price}
                percent_change_1d={coin.interval="1d".price_change_pct}
                percent_change_7d={coin.interval="7d".price_change_pct}
            />
        ))
    }

    render() {
        const { crypto } = this.props;
        const { contentContainer } = styles;
        console.log('hello')

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={'Loading...'}
                        textStyle={{color: '#253145'}}
                        animation='fade'
                    />
                </View>
            )
        }

        return (
            <ScrollView contextContainerStyle={contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        )
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddintTop: 55
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)