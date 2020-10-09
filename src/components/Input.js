import React,{useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Input = (props) => {
    const [hidePass,setHidePass] = useState(true);
    const viewStyle=[styles.container,props.style]
    return (
        <View style={viewStyle}>
            {
                props.password ? 
                <View style={styles.inputContainer}>
                     <TextInput placeholder={props.placeholder}  secureTextEntry={hidePass} style={{width:300}}/>
                     <TouchableOpacity onPress={()=>setHidePass(!hidePass)}>
                     <Text style={styles.text} > Show </Text>
                     </TouchableOpacity>
                     
                </View>
                :
                <TextInput placeholder={props.placeholder} />
            }
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius:8,
        padding: 16,
        backgroundColor:  '#F6F6F6',
        borderWidth: 1,
        borderColor: '#BDBDBD',
       
    },
    inputContainer: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text: {
        color: '#5DB075'
    }
})
export default Input
