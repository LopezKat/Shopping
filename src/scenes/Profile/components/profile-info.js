import React, { Component } from 'react';
import { 
    Text, 
    View,
    Image,
    StyleSheet,
    Button,
    AsyncStorage
} from 'react-native';
import i18n from './../../../i18n';


class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: {}
        }
        this.getDataLogin();
    }

    getDataLogin = async () =>{
        try {
            const data = await AsyncStorage.getItem('data');
            if(data){
                const user = JSON.parse(data);
                this.setState({
                    dataUser: user
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    closeSession = async () =>{
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading')
    }

    render() {
        return (  
            <View style={styles.profileContainer}>
                <Image
                    source = { { uri:  this.state.dataUser.photo } }
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}> { this.state.dataUser.name } </Text>
                <Text style={styles.username}> { this.state.dataUser.username }  </Text>
                <Button style={styles.username}
                    color="white"
                    onPress={ this.closeSession } 
                    title={ i18n.t('CLOSE_SESSION') }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingTop: 20,
        backgroundColor: '#3949AB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileTittle:{
        color: '#fff',
        fontSize: 30,
        marginTop: 10
    },
    profileName:{
        color: '#fff',
        fontSize: 24,
        marginTop: 20
    },
    profileImage:{
        width: 140,
        height: 140,
        borderRadius: 70,
        resizeMode: 'cover'
    },
    username:{
        color: '#fff',
        padding: 10
    },
});

export default ProfileInfo;