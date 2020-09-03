import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Inventory from '../Inventory.json';



const Numbers = props => {

    const replaceNumber = (check, number) => {
        if (check === 0) {
            return;
        } else if (props.slotPressed === 'slot1') {
            props.useSlotOne(number);
            props.useShowNumber(false);
        } else if (props.slotPressed === 'slot2') {
            props.useSlotTwo(number);
            props.useShowNumber(false);
        }

    }

    return (
        <View style={styles.numbersContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.numberButton} onPress={() => props.useShowNumber(false)}>
                    <Text style={styles.numberText}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={(props.number7 > 0) ? styles.numberButton : styles.emptyNumberButton} onPress={() => replaceNumber(props.number7, 7)}>
                    <Text style={styles.numberText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(props.number8 > 0) ? styles.numberButton : styles.emptyNumberButton} onPress={() => replaceNumber(props.number8, 8)}>
                    <Text style={styles.numberText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(props.number9 > 0) ? styles.numberButton : styles.emptyNumberButton} onPress={() => replaceNumber(props.number9, 9)}>
                    <Text style={styles.numberText}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={(props.number4 > 0) ? styles.numberButton : styles.emptyNumberButton} onPress={() => replaceNumber(props.number4, 4)}>
                    <Text style={styles.numberText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(props.number5 > 0) ? styles.numberButton : styles.emptyNumberButton} onPress={() => replaceNumber(props.number5, 5)}>
                    <Text style={styles.numberText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(props.number6 > 0) ? styles.numberButton : styles.emptyNumberButton} onPress={() => replaceNumber(props.number6, 6)}>
                    <Text style={styles.numberText}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={(props.number1 > 0) ? styles.numberButton : styles.emptyNumberButton} onPress={() => replaceNumber(props.number1, 1)}>
                    <Text style={styles.numberText}>1</Text>
                </TouchableOpacity >
                <TouchableOpacity style={(props.number2 > 0) ? styles.numberButton : styles.emptyNumberButton} onPress={() => replaceNumber(props.number2, 2)}>
                    <Text style={styles.numberText}>2</Text>
                </TouchableOpacity >
                <TouchableOpacity style={(props.number3 > 0) ? styles.numberButton : styles.emptyNumberButton} onPress={() => replaceNumber(props.number3, 3)}>
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
    emptyNumberButton: {
        backgroundColor: "grey",
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