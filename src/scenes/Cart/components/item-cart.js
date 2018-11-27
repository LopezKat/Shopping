import React from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';

const ItemCart = props => (
    <TouchableHighlight 
        onPress={ () => props.onPressEvent(props.item) }
        underlayColor="#f2f2f2" >
        <View style={styles.container}>
            <Text> {props.item.avatar} </Text>
            <Text> {props.item.name} </Text>
            <Text> {props.item.price} </Text>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    }
});

export default ItemCart;