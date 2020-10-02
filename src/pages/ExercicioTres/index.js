import React, { useEffect,useState } from 'react';
import { View, Text,ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';
import { set } from 'react-native-reanimated';

export default function ExercicioTres() {
 const [contato, setContato] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          setContato(data);
        }
      }
    })();


  }, []);
  return contato.length == 0 ? (<Text> Carregando </Text>) : (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Contacts Module Example</Text>
      <ScrollView>{
      contato.map((contato, index) => (
      <Text key={index}>{contato.name}</Text>
      ))}
        </ScrollView>
    </View>
  );
}

