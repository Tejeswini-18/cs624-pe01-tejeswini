
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lakshmi Tejeswini</Text>
      <Text style={styles.text}>MSCS</Text>
      <Text style={styles.text}>City University of Seattle (STC)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
  },
});
