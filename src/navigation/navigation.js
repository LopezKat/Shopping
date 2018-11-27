import React from 'react';
import { StackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import Catalog from '../scenes/Catalog';
import CatalogDetail from '../scenes/CatalogDetail';
import { SideMenu } from './side-menu';
import Login from '../scenes/Login';
import AuthLoading from '../scenes/Login/components/authLoading';
import Profile from '../scenes/Profile';
import Cart from '../scenes/Cart';
import Header from '../scenes/Header';
import ShoppingCarIcon from './cart-icon.js';
import Form from '../scenes/Form';

    export const StackProducts = StackNavigator({
        CatalogScreen: { screen: Catalog },
        CatalogDetailScreen: { screen: CatalogDetail },
        CartScreen: { screen: Cart },
        ProfileScreen: { screen: Profile },
        HeaderScreen: { screen: Header },
        FormScreen: { screen: Form },
    },
    {
        initialRouteName: 'CatalogScreen',
        navigationOptions: {
            headerTitle: 'Productos',
            headerRight: (
                // <Header/>
                <ShoppingCarIcon/>
            )
        }
    });

    export const StackCart = StackNavigator({
        CartScreen: { screen: Cart }
    });

    export const Drawer = createDrawerNavigator({
        StackScren: { screen: StackProducts },
        StackCarScreen: { screen: StackCart },
    },{
        drawerWidth: 300,
        contentComponent: SideMenu
    });

    export const SwitchNavigator = createSwitchNavigator({
        Login: Login,
        AuthLoading: AuthLoading,
        App: Drawer
    },{
        initialRouteName: 'AuthLoading',
    });

