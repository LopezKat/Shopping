import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, Switch, Button } from 'react-native';

const FormOverView = props => (
  <ScrollView style={styles.formWrapper}>

    <Text style={styles.formLabel}> Nombre</Text>
    <TextInput
      placeholder='Ingrese el nombre'
      style={styles.formInput}
      value=""
    />
    <Text style={styles.formLabel}> @Twitter</Text>
    <TextInput
      placeholder='Ingrese el usuario de Twitter'
      style={styles.formInput}
      value=""
    />
    <Text style={styles.formLabel}> Teléfono</Text>
    <TextInput
      placeholder='Ingrese el teléfono'
      style={styles.formInput}
      value=""
    />
    <Text style={styles.formLabel}> Dirección</Text>
    <TextInput
      placeholder='Ingrese la dirección'
      style={styles.formInput}
      value=""
    />

    <Text style={styles.formLabel}> Permitir datos sociales</Text>
    <Switch
      trackColor={'#08088A'}
      value={true}
    />

    <Button
      onPress={props.onPress}
      color="#08088A"
      title={1 == 1 ? "Sincronizar con Facebook" : "No Sincronizar"}
    />
  </ScrollView>
);

const styles = StyleSheet.create({

  formWrapper: {
    marginHorizontal: 25,
  },
  formLabel: {
    color: '#08088A',
    marginVertical: 5,
  },
  formInput: {

  }

});

export default FormOverView;