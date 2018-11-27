import React, { Component } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import ProductList from '../Catalog';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../../../actions/cart-actions-creator';

renderItem = ({ item }) => <CartItem product={item} />
separatorComponent = () => <ItemSeparator />;
emptyComponent = () => <Text>El carrito se encuentra vacio.</Text>
keyExtractor = item => item._id.toString();
const total = 0;
totalPurchase = (props) => {
    props.cartItems.map((item) => (
        total += parseInt(item.price)
    ))
}
class CartScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    avatar={{ uri: item.avatar }}
                    key={item._id}
                    title={item.name}
                    subtitle={item.price}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch(removeProductFromCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
