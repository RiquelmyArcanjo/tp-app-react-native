import React, { useEffect,useState } from 'react';
import { View, Text,FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import { set } from 'react-native-reanimated';

export default function ExercicioTres() {

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
        // setContato(data);
          const contact = data;
          console.log(contact);
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
      {/* <FlatList data={["item","item2"]} renderItem={({item,index}) => (<text> {item} </text>) }/>  */}
    </View>
  );
}