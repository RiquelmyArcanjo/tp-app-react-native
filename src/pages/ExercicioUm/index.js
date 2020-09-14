import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

export default function App() {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);

  const b = parseFloat(base);
  const h = parseFloat(altura);
  const area = (b*h)/2;

  return(
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>Área do Triângulo</Text>
    <TextInput placeholder="Entre com a base" keyboardType="decimal-pad" style={styles.input}  value={base} onChangeText={setBase}/>
    <TextInput placeholder="Entre com a altura" keyboardType="decimal-pad" style={styles.input} value={altura} onChangeText={setAltura}/>
    <Text style={styles.sectionSubtitle}>Resultado</Text>
  <Text style={styles.result}>{area}</Text>
  </View>);
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4E4E4',
  },
  sectionTitle: {
    fontFamily: 'sans-serif-light',
    fontSize: 30,
  },
  sectionSubtitle: {
    marginTop: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
    fontSize: 20,
  },
  input: {
    textAlign:'center',
    alignSelf: 'stretch',
    marginHorizontal: 36,
    height: 45,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
    fontSize: 18,
  },
  result: {
    fontFamily: 'sans-serif-light',
    fontSize: 26,
  },

})


