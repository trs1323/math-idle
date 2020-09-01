import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



const Main = props => {

    const equalPressed = () => {
        let slotTotal = props.slotOne + props.slotTwo;
        let prevTotal = props.total;
        let tempTotal = prevTotal + slotTotal;
        props.useTotal(tempTotal)
    }

    const numberPressed = (slot) => {
        props.useSlotPressed(slot);
        props.useShowNumber(true)
    }


    return (
        <View style={styles.container}>
            <View style={styles.total}>
                <Text style={styles.text}>Total Math: </Text>
                <Text style={styles.text}>{props.total}</Text>
            </View>
            <View style={styles.math}>
                <TouchableOpacity onPress={() => numberPressed('slot1')}>
                    <Text style={styles.text}>{props.slotOne}</Text>
                </TouchableOpacity>
                <Text style={styles.text}>+</Text>
                <TouchableOpacity onPress={() => numberPressed('slot2')}>
                    <Text style={styles.text}>{props.slotTwo}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.equalButton} onPress={equalPressed}>
                    <Text >=</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.shop}>
                <TouchableOpacity style={styles.shopButton} onPress={() => props.useShowShop(true)}>
                    <Text>Shop</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282929',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
    },
    total: {
        flexDirection: 'row',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 10
    },
    math: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 'auto',
        width: '50%'
    },
    text: {
        color: '#fff',
        fontSize: 30,

    },
    equalButton: {
        borderColor: '#757575',
        borderWidth: 2,
        borderStyle: 'solid',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white'
    },
    shopButton: {
        borderColor: '#757575',
        borderWidth: 2,
        borderStyle: 'solid',
        backgroundColor: 'white',
        padding: 10
    },
    shop: {
        marginBottom: 10,
    }
});


export default Main;