import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonSwitch = (props) => {
    const [isPost, setIsPost] = useState(true)
    const setProps=()=>{
        setIsPost(!isPost)
        props.isPost()
    }
    return (
        <View style={styles.container}>
            { isPost ? <View style={styles.container1}>
                <View style={{ backgroundColor: 'white', flex: 0.5, alignItems: 'center', justifyContent: 'center', borderRadius: 24 }}>
                    <Text style={{ color: '#5DB075' }}>Posts</Text>
                </View>
                <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={setProps}>
                        <Text>Photos</Text>
                    </TouchableOpacity>

                </View>
            </View>
                :
                <View style={styles.container1}>
                    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={setProps}>
                            <Text >Posts</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'white', flex: 0.5, alignItems: 'center', justifyContent: 'center', borderRadius: 24 }}>

                        <Text style={{ color: '#5DB075' }}>Photos</Text>


                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      
    },
    container1: {
        height: 50,
        backgroundColor: '#F6F6F6',
        borderColor: '#F6F6F6',
        borderWidth: 1,
        marginTop: 24,
        flexDirection: 'row',
        borderRadius: 24
    }
})
export default ButtonSwitch
