import React,{useState} from 'react'
import { View,  StyleSheet } from 'react-native'
import { Button, Text, Header } from 'react-native-elements';
import Input from '../components/Input'


const LoginScreen = () => {
   

    return (
        <View style={styles.container}>
              <Header backgroundColor="#ffffff"
         containerStyle={{borderBottomColor:'#ffffff'}}
         
        centerComponent={{ text: 'Log In', style: { color: 'black',fontWeight:'600',fontSize: 30 } }}
       
        />

           
           <Input style={styles.emailInput} placeholder="Email"/>

           <Input  placeholder="Password" password={true}/>

           <Button title="Log in" buttonStyle={styles.button} />

           <Text style={styles.forgotPassword}>Forgot your password</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontWeight:'600',
        alignSelf:'center',
        marginTop: 60
    },
    emailInput: {
        marginTop: 32,
        marginBottom: 16
    },
    button: {
        marginTop: 167,
        backgroundColor: '#5DB075',
        borderRadius: 25,
        height: 51
    },
    forgotPassword:{
        color: '#5DB075',
        marginTop: 16,
        alignSelf:'center',
        fontWeight: '600'
    }
})
export default LoginScreen
