import React from 'react'
import { View,  StyleSheet } from 'react-native'
import { Button, Text, Header, CheckBox } from 'react-native-elements';

import Input from '../components/Input'

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
       <Header backgroundColor="#ffffff"
         containerStyle={{borderBottomColor:'#ffffff'}}
         leftComponent={{icon:'close',color:'gray'}}
        centerComponent={{ text: 'Sign Up', style: { color: 'black',fontWeight:'600',fontSize: 30 } }}
        rightComponent={{text:'Login', style: {color:'#5DB075',fontSize:18}}}
        />

      <Input style={styles.nameInput} placeholder="Name"/>
       
       <Input style={styles.emailInput} placeholder="Email"/>

       <Input  placeholder="Password" password={true}/>

     

        <View style={styles.checkBoxContainer}>
            <CheckBox
             checked={false}/>
             <Text style={styles.checkTest}>I would like to receive your newsletter and other promotional information</Text>
        </View>
      

       <Button title="Sign Up" buttonStyle={styles.button} />

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
    nameInput: {
        marginTop: 32,
        marginBottom: 16
    },
    emailInput: {
        marginBottom: 16
    },
    button: {
        marginTop: 43,
        backgroundColor: '#5DB075',
        borderRadius: 25,
        height: 51
    },
    forgotPassword:{
        color: '#5DB075',
        marginTop: 16,
        alignSelf:'center',
        fontWeight: '600'
    },
    checkBoxContainer: {
        flexDirection:'row',
      
        marginTop: 32
    },
    checkTest: {
        marginTop:15,
        marginLeft: -10,
        flex:1
    }
}) 
export default RegisterScreen
