import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Numbers = props => {
    return (
        <View style={styles.numbersContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.numberButton}>
                    <Text style={styles.numberText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numberButton}>
                    <Text style={styles.numberText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numberButton}>
                    <Text style={styles.numberText}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.numberButton}>
                    <Text style={styles.numberText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numberButton}>
                    <Text style={styles.numberText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numberButton}>
                    <Text style={styles.numberText}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.numberButton}>
                    <Text style={styles.numberText}>1</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.numberButton}>
                    <Text style={styles.numberText}>2</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.numberButton}>
                    <Text style={styles.numberText}>3</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    numbersContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    numberButton: {
        backgroundColor: "#d4fbfc",
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 20,
        margin: 5
    },
    numberText: {
        fontSize: 18
    }
});

export default Numbers;