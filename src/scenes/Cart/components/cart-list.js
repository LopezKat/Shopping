import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    ScrollView,
    FlatList
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
                        onPressRightIcon={ () => props.onPressEvent(item) }                       
                    >
                    </ListItem>
                ))
            }
        </List>

        {props.cartItems.length > 0 &&
            <View>
                <Button
                    title="Continuar comprando"
                    onPress={() => props.navigation.navigate('CatalogScreen')}
                />
                <Button
                    title="Pagar"
                    onPress={() => props.navigation.navigate('FormScreen')}
                />
            </View>
        }
        {
            props.cartItems.length == 0 &&
            <Text style={styles.title}> No tienes productos en tu carrito de compras.</Text>
        }
    </ScrollView>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontFamily: "IndieFlower"
    },
})

const mapDispatchToProsp = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapDispatchToProsp, null)(withNavigation(CartList));


