import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import ShopItems from '../ShopItems.json'

const Item = ({ item }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.price}</Text>
        <TouchableOpacity style={styles.buyButton} data={item.price}>
            <Text >Buy</Text>
        </TouchableOpacity>
    </View>
);

const Shop = props => {

    const renderItem = ({ item }) => {


        return (
            <Item
                item={item}
            />
        );
    };


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
                    keyExtractor={(item) => item.id}

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