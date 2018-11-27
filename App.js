import React, { Component } from "react";
import { SwitchNavigator } from "./src/navigation/navigation";
import { Provider } from 'react-redux';
import store from './src/store';

import RNLanguage from 'react-native-languages';
import i18n from "./src/i18n";

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    RNLanguage.addEventListener('change', this.onChangeLanguage)
  }

  componentWillUnmount() {
    RNLanguage.removeEventListener('change', this.onChangeLanguage)
  }

  onChangeLanguage = ({ languaje }) => {
    i18n.locale = languaje;
  };

  render() {
    return (
      <Provider store={store} >
        <SwitchNavigator />
      </Provider >
    );
  }
}

