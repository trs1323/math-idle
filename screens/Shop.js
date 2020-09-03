import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import ShopItems from '../ShopItems.json'



const Shop = props => {

    const Item = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.price}</Text>
            <TouchableOpacity style={styles.buyButton} data={item.price} onPress={() => buyItem(item.price, item.title)}>
                <Text >Buy</Text>
            </TouchableOpacity>
        </View>
    );

    const renderItem = ({ item }) => {


        return (
            <Item
                item={item}
            />
        );
    };

    const buyItem = (price, item) => {
        if (props.total >= price) {
            props.useTotal(props.total - price);
            alert(`You bought the number ${item}`);
            if (item === 0) {
                props.setNumber0(props.number0 + 1)
            } else if (item === 1) {
                props.setNumber1(props.number1 + 1)
            } else if (item === 2) {
                props.setNumber2(props.number2 + 1)
            } else if (item === 3) {
                props.setNumber3(props.number3 + 1)
            } else if (item === 4) {
                props.setNumber4(props.number4 + 1)
            } else if (item === 5) {
                props.setNumber5(props.number5 + 1)
            } else if (item === 6) {
                props.setNumber6(props.number6 + 1)
            } else if (item === 7) {
                props.setNumber7(props.number7 + 1)
            } else if (item === 8) {
                props.setNumber8(props.number8 + 1)
            } else if (item === 9) {
                props.setNumber9(props.number9 + 1)
            }
        }
    }


    return (
        <View style={styles.shopContainer}>
            <View style={styles.header}>
                <Text style={styles.text}>Item:</Text>
                <Text style={styles.text}>Price:</Text>
                <Text style={styles.text}>Total: {props.total}</Text>
                <TouchableOpacity style={styles.buyButton} onPress={() => props.useShowShop(false)}>
                    <Text>X</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.container}>
                <FlatList
                    data={ShopItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.price}

                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shopContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        width: '80%',

    },
    container: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,

    },
    text: {
        color: 'white'
    },
    buyButton: {
        borderColor: '#757575',
        borderWidth: 2,
        borderStyle: 'solid',
        backgroundColor: 'white',
        padding: 10
    }
});


export default Shop;