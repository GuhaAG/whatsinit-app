import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Scan history should go here
       */}
    </ScrollView>
  );
}

HistoryScreen.navigationOptions = {
  title: 'History',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
