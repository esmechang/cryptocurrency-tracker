import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import { Header, CryptoContainer } from './src/components';

export default function App() {
  return (
    <Provider store={Store}>
      <View>
        <Header />
        <CryptoContainer />
      </View>
    </Provider>
  );
}
