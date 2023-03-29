import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const ResultBox = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{props.result}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyButton} >
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sellButton}>
          <Text style={styles.buttonText}>Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buyButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  sellButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

