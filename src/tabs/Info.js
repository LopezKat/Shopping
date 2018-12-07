import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

class Tab3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={{ width: '100%', height: '100%' }}
          source={require('../../assets/tienda.jpg')}>
          <View style={styles.info}>
            <Text style={styles.text}>Ubicados en Medellin (Ant)</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text: {
    fontFamily: "IndieFlower",
    fontSize: 30, 
    color: "red",
},
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Tab3;
