import React,{useState} from 'react'
import { View, StyleSheet,Dimensions, Button } from 'react-native'
import { Header,Avatar, Text } from 'react-native-elements'
import ButtonSwitch from '../components/ButtonSwitch'
import Post from '../components/Post'

const {width} =Dimensions.get('window')
const ProfileScreen = () => {
    const [isPost,setIsPost] = useState(true)
    const setPost = ()=>{
        setIsPost(!isPost)
    }
    return (
        <View style={styles.container}>
          <Header
         backgroundColor="#5DB075"
         containerStyle={{height:110,borderBottomWidth:0}}
  leftComponent={{ text: 'Settings', style: {color: '#fff'}}}
  centerComponent={{ text: 'Profile', style: { color: '#fff',fontSize: 30,fontWeight: '600'} }}
  rightComponent={{ text: 'Logout', style: {color: '#fff'}}}
/>

        <View style={{backgroundColor:'#5DB075',alignItems:'center',height:120}}>

       
        <Avatar
        rounded
        size={158}
        avatarStyle={{borderColor:'white',borderWidth:3,}}
        source={{
            uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        />
         </View>

        <View style={{paddingHorizontal:16,flexDirection:'column'}}>
        <Text h4 h4Style={{marginTop: 50,alignSelf:'center',fontWeight:'600'}}>Victoria Robertson</Text>
         <Text style={{alignSelf:'center', marginTop: 8,fontWeight:'600'}}>A mantra goes here</Text>

        
        <ButtonSwitch isPost={setPost}/>
        
        
       {
           isPost? <View>
                <Post />
                <Post/>
                <Post/>
           </View>
           :
           <View>
           <View style={{marginTop:16,backgroundColor:'#F6F6F6', height:240,borderRadius: 8}}>
 
           </View>

           <Text style={{marginTop:8, fontWeight: '600',fontSize:18}}>Header</Text>
           </View>
       }
        
     
        </View>

        <View style={{  flex:1, flexDirection:'column'}}>
            <View style={{borderBottomColor:'gray',borderBottomWidth:1,height:83}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:26}}>
            <View style={{width:32,height:32, borderRadius:16, backgroundColor:'#5DB075'}}></View>
            <View style={{width:32,height:32, borderRadius:16, backgroundColor:'#F6F6F6'}}></View>
            <View style={{width:32,height:32, borderRadius:16, backgroundColor:'#F6F6F6'}}></View>
            <View style={{width:32,height:32, borderRadius:16, backgroundColor:'#F6F6F6'}}></View>
            <View style={{width:32,height:32, borderRadius:16, backgroundColor:'#F6F6F6'}}></View>
            </View>
           
            
        </View>
       
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff'
    }
})
export default ProfileScreen
