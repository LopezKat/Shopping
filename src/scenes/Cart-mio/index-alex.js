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
import { connect } from 'react-redux';
import ItemSeparator from '../../Catalog/components/item-separator';
import { withNavigation } from 'react-navigation';
import CartItem from './cart-item';

renderItem = ( { item }) => <CartItem product = { item } />
separatorComponent = () => <ItemSeparator />;
emptyComponent = () => <Text>El carrito se encuentra vacio.</Text>
keyExtractor = item => item._id.toString();
const total = 0;
totalPurchase = (props) => {
    props.cartItems.map((item) => (
        total += parseInt(item.price)
    ))
}
const CartList = (props) => (
    <ScrollView>
            <View>
                <Text style={ styles.title }>Total</Text>
                <Button
                    style={ styles.title }
                    title ="Pagar"
                    //onPress = { ()=>{ this.totalPurchase(props) } }
                    onPress = { ()=> props.navigation.navigate('CatalogDetailScreen') }
                />
            </View>
            <List containerStyle={{marginBottom: 20}}>
                {
                    props.cartItems.map((item) => (
                        <ListItem
                            avatar={{uri:item.avatar}}
                            key={item._id}
                            title={item.name}
                            subtitle={item.price}
                        />
                    ))
                }
            </List>
    </ScrollView>
);

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontFamily: "IndieFlower"
    },
})

const mapDispatchToProsp = ( state ) => {
    return {
        cartItems: state
    }
}

export default connect(mapDispatchToProsp, null)(withNavigation(CartList));