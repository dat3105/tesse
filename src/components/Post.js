import React from 'react'
import { View, Text } from 'react-native'

const Post = (props) => {
    const ViewStyle=[{ flexDirection:'row',marginTop: 16},props.style]
    return (
        <View style={ViewStyle}>
        <View style={{width:50,height:50, backgroundColor:'#F6F6F6',borderRadius:8}}></View>
        <View style={{flexDirection:'column',marginLeft: 16,flex:1, borderBottomWidth:1,borderBottomColor:'#F6F6F6',height:85,paddingBottom:16}}>
            <View style={{flexDirection:'row',flex:1,justifyContent:'space-between', }}>
               <Text style={{fontSize:17}}>Header</Text>
               <Text>8m ago</Text>
            </View>
            <Text >He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
        </View>
    </View>
    )
}

export default Post
