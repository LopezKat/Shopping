import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
}
  from 'react-native';
import HttpProduct from '../../../services/Product/http-products';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      cantidad: '1'
    }
    console.log(this.state.cantidad);
  }

  componentDidMount = () => {
    id = this.props.navigation.getParam('id', 'no-data');
    this.getProductById(id);
  }
  /**
   * Funcion para Obtener un producto por su Identificador
   */
  async getProductById(id) {
    const data = await HttpProduct.getProductsById(id);
    this.setState({
      product: data
    })
    console.log(data);
  }

  render() {
    return (
      <View>
        <View style={styles.dataContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: this.state.product.avatar }} />
          </View>

          <View style={styles.containerCol}>
            <View style={styles.brand}>
              <Text style={styles.brandText}> {this.state.product.brand} </Text>
            </View>

            <View style={styles.title}>
              <Text style={styles.titleText}> {this.state.product.name}</Text>
            </View>

            <View style={styles.cantidadContai}>
              <View><Icon
                onPress={() => props.navigation.navigate('CartScreen')}
                name="minus-circle" style={styles.icon} size={20}/></View>
              <View style={styles.containerInput}>
                <TextInput
                  value={this.state.cantidad}
                  style={styles.formInput}
                />
              </View>
              <View><Icon
                onPress={() => props.navigation.navigate('CartScreen')}
                name="plus-circle" style={styles.icon} size={20}/></View>
            </View>

            <View style={styles.price}>
              <Text style={styles.titleText}> Precio:  $ {this.state.product.price} </Text>
            </View>
          </View>
        </View>


        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={() => this.props.onPressEvent(this.state.product)}>
            <View style={styles.buttonOpacity}>
              <Text style={styles.buttonTextOpacity}>Añadir al carrito</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dataContainer: {
    color: '#3949AB',
    borderRadius: 5,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    borderRadius: 75,
  },
  containerCol: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  brand: {
    color: '#3949AB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  brandText: {
    color: '#3949AB',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    color: '#3949AB',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold"
  },
  cantidadContai: {
    flex: 3,
    flexDirection: "row",     
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerInput:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 60, 
    height: 60
  },
  formInput: {
    borderBottomWidth: 1,
    width: 40,
    height:40,     
  },
  icon:{
    color: '#3949AB',
  },
  price: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpacity: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#3949AB',
    borderRadius: 20,
  },
  buttonTextOpacity: {
    padding: 20,
    color: 'white',
    fontSize: 18
  },
});

export default ProductDetail;
