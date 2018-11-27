import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
} from 'react-native';

import ItemProduct from './components/item-product';
import ItemSeparator from './components/item-separator';
import HttpProduct from "../../services/Product/http-products";

class Catalog extends Component{

    constructor(props){
        super(props);
        this.state = {
            productList: [],
        }
    }
    componentDidMount = () =>{ 
        this.getProducts();
    }
    /**
     * Metodo para Obtener los Productos de nuestra Api
     */
    async getProducts(){
        const data = await HttpProduct.getProducts();
        this.setState({
            productList: data,
        });
    }

    renderItem = ( { item }) => <ItemProduct navigation = { this.props.navigation } product = { item } />
    separatorComponent = () => <ItemSeparator />;
    emptyComponent = () => <Text>No hay productos</Text>
    keyExtractor = item => item._id.toString();
    
    render(){
        return (
            <View>
                <FlatList
                    data ={ this.state.productList }
                    renderItem={ this.renderItem }
                    ItemSeparatorComponent = { this.separatorComponent }
                    ListEmptyComponent = { this.emptyComponent }
                    keyExtractor = { this.keyExtractor }
                    ListHeaderComponent={this.renderHeaderSearchBar}  
                />
            </View>
        )
    }
}
export default Catalog;