import React, {Component} from 'react'
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    Image,
    AsyncStorage
} from 'react-native';

import HttpUser from "../../../services/User/http-user";
import i18n from './../../../i18n';

export class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: 'apulgarin@gmail.com',
            password: '345678',
            error: '',
        }
    }

    onChangeText = (input, text)=>{
        if(input == 'email'){
            this.setState({
                email: text
            })
        }else if(input == 'password'){
            this.setState({
                password: text
            })
        }
    }

    validate = () =>{
        var vBalid = true;
        console.log(this.state);

        if(this.state.email === ""){
            this.setState({error: 'Email field is required'});
            vBalid = false;
            return;
        }
        if(this.state.password === ""){
            this.setState({error: 'Password field is required'});
            vBalid = false;
            return;
        }
        if(vBalid){
            this.setState({error: ''});
            this.login();
        }
    }

    login = async () =>{
        const params = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log('params:'+params);
        const data = await HttpUser.login(params);
        if(data){
            console.log(data);
            await AsyncStorage.setItem('data', JSON.stringify(data));
            this.props.navigation.navigate('App');  
        }
    }
    
    render() {
        return (
        <View style ={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.heading}>                
                   <Image
                        source={require('../../../../assets/carrito.jpg')}
                        style={styles.headingImage}
                        resizeMode="contain"
                   />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.formLabel}> Email </Text>
                    <TextInput
                        placeholder="Email"
                        style={styles.formInput}
                        value={this.state.email}
                        onChangeText={(text)=>this.onChangeText('email',text)}
                    />
                    <Text style={styles.formLabel}>  { i18n.t('PASSWORD') } </Text>
                    <TextInput
                        placeholder={ i18n.t('PASSWORD') } 
                        style={styles.formInput}
                        value={this.state.password}
                        onChangeText={(text)=>this.onChangeText('password',text)}
                        secureTextEntry
                    />
                    <Text style={styles.error}>
                        {this.state.error}
                    </Text>
                    <Button
                        style={styles.button}
                        color="#08088A"
                        title={ i18n.t('SIGN_IN') }
                        onPress={() => this.validate() }
                    />
                </View>
            </View>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal: 20,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: '30%'
    },
    container:{
    },
    formLabel:{
        color: '#198e97'
    },
    formInput:{
        width: 250,
        borderBottomColor: '#198e97',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    heading: {
        alignItems:  'flex-start'
    },
    headingImage: {
        width: 100,
        height: 100,
    },
    inputContainer: {
        marginTop: 24
    },    
    error:{
        color: 'red',
        textAlign: 'center'
    },
    button:{
        color: '#fff',
        padding: 10
    },
    
});

export default LoginForm;