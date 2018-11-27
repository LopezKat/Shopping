import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../../../actions/cart-actions-creator';
import CartList from './components/cart-list';


class CartScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <CartList  
            onPressEvent={ this.props.removeItem }
            products={ this.props.cartItems } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const mapStateToProps = ( state ) => {
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
