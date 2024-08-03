import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [buttonColor, setButtonColor] = useState('red');

  const color = color => {
    if (buttonColor !== 'red') {
      return setButtonColor('red');
    }
    return setButtonColor(color);
  };

  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.header}> Faça seu cadastro! </Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput placeholder="Nome:" />
        <TextInput placeholder="Endereço:" />
        <TextInput placeholder="Telefone:" />
        <TextInput placeholder="Data de nascimento:" />
      </View>
      <Button title="Click" color={buttonColor} onPress={() => color('blue')} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
  },
  header: {
    color: 'black',
    fontSize: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputsContainer: {},
});
