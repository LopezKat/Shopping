import React from 'react';
import { StackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Catalog from '../scenes/Catalog';
import CatalogDetail from '../scenes/CatalogDetail';
import { SideMenu } from './side-menu';
import Login from '../scenes/Login';
import AuthLoading from '../scenes/Login/components/authLoading';
import Profile from '../scenes/Profile';
import Cart from '../scenes/Cart';
import ShoppingCarIcon from './cart-icon.js';
import Form from '../scenes/Form';
import Success from '../scenes/Succes';
import FormOverView from '../tabs/FormOverView';
import Chat from '../tabs/Chat';
import Info from './../tabs/Info';

//Iconos de nuestros Tabs
const iconTab1 = (<Icon name="user-circle" size={24} color="#999"/>);
const iconTab2 = (<Icon name="rocket" size={24} color="#999"/>);
const iconTab3 = (<Icon name="address-card" size={24} color="#999"/>)


    export const StackProducts = StackNavigator({
        CatalogScreen: { screen: Catalog,
            navigationOptions: {
                title: 'Catalogo',
                headerRight: (
                    <ShoppingCarIcon/>
                )
            }
        },
        CatalogDetailScreen: { screen: CatalogDetail,
            navigationOptions: {
                title: 'Detalle Producto',
                headerRight: (
                    <ShoppingCarIcon/>
                )
            }
        },
        CartScreen: { screen: Cart,
            navigationOptions: {
                title: 'Mis productos',
                headerRight: (
                    <ShoppingCarIcon/>
                )
            }
        },
        ProfileScreen: { screen: Profile },
        FormScreen: { screen: Form,
            navigationOptions: {
                title: 'Datos de compra',                
            } 
        },
        SuccessScreen: { screen: Success,
            navigationOptions: {
                title: 'Pago Exitoso',                
            }  
        },
    },
    {
        initialRouteName: 'CatalogScreen',        
    });

    export const StackCart = StackNavigator({
        CartScreen: { screen: Cart }
    });

    export const Tabs = createBottomTabNavigator({
        Tab1: { 
            screen: FormOverView,
            navigationOptions:{
                title: 'Mi Perfil',
                tabBarIcon: iconTab1
            } 
        },
        Tab2: { 
            screen: Chat ,
            navigationOptions:{
                title: 'Chat',
                tabBarIcon: iconTab2
            } 
        },
        Tab3: { 
            screen: Info,
            navigationOptions:{
                title: 'Info',
                tabBarIcon: iconTab3
            }  
        },
    },
    {
        order: ['Tab1', 'Tab2', 'Tab3'],
        initialRouteName: 'Tab1',
        tabBarOptions:{
            activeTintcolor: '#e91e63',
            labelStyle:{
                fontSize: 16,
            },
            style:{
                backgroundColor: 'black'
            }
        }
    });

    export const Drawer = createDrawerNavigator({
        StackScren: { screen: StackProducts },
        StackCarScreen: { screen: StackCart },
        Tabs: { screen: Tabs },
    },{        
        drawerWidth: 300,
        contentComponent: SideMenu,        
    });

    export const SwitchNavigator = createSwitchNavigator({
        Login: Login,
        AuthLoading: AuthLoading,
        App: Drawer
    },{
        initialRouteName: 'Login',
    });

