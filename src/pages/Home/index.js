import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';


export default function Home({ navigation }){
return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Soluções</Text>

        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('ExercicioUm')}>
            <Text style={styles.buttonText}>Exercício 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('ExercicioDois')}>
            <Text style={styles.buttonText}>Exercício 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('ExercicioTres')}>
            <Text style={styles.buttonText}>Exercício 3</Text>
        </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4A235A',
        alignItems: 'center',
    },
    titulo:{
        color: 'white',
        fontSize:35,
        marginTop: 30,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4A235A',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius:15,
        padding: 10,
        width: 250,
        height: 80,
        marginTop: 18,
    },
    buttonText:{
        fontSize: 25,
        color: 'white',

    }
});