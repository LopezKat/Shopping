import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';


keyExtractor = item => item._id.toString();


const CartList = (props) => (
    <ScrollView>
        <List containerStyle={{ marginBottom: 20 }}>
            {
                props.cartItems.map((item) => (
                    <ListItem
                        avatar={{ uri: item.avatar }}
                        key={item._id}
                        title={item.name}
                        subtitle={item.price}
                        rightIcon={{ name: 'close' }}
                        onPressRightIcon={() => props.onPressEvent(item)}
                        badge={{ value: 1, textStyle: { color: '#ccc' } }}                                                
                    >
                    </ListItem>
                ))
            }
        </List>
        {
            props.cartItems.length == 0 &&
            <Text style={styles.title}> No tienes productos en tu carrito de compras.</Text>
        }
        <View style={styles.container}>
            <View style={styles.button}>
                <Button
                    title="Continuar comprando"
                    onPress={() => props.navigation.navigate('CatalogScreen')}
                />
            </View>

            {props.cartItems.length > 0 &&

                <View style={styles.button}>
                    <Button
                        title="Pagar"
                        onPress={() => props.navigation.navigate('FormScreen')}
                    />
                </View>

            }
        </View>        
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginBottom: 30,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontFamily: "IndieFlower"
    },
    input:{
        backgroundColor: '#ccc', 
        marginLeft: 80, 
        width: 40
    },
})

const mapDispatchToProsp = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapDispatchToProsp, null)(withNavigation(CartList));


