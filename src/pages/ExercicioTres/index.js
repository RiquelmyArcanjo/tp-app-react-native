import React, { useEffect,useState } from 'react';
import { View, Text,ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';
import { set } from 'react-native-reanimated';

export default function ExercicioTres() {
 const [contato, setContato] = useState(0);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          setContato(data);

          const contact = data;
          console.log(contato[1]);
        }
      }
    })();


  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Contacts Module Example</Text>
      <ScrollView>{
      contato.map(contato => (
      <Text>{contato.name}</Text>
      ))}
        </ScrollView>
    </View>
  );
}

