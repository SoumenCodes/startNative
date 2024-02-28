import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Users = () => {
    const userData = [
        {
          id: 1,
          username: 'John Doe',
          image: 'https://randomuser.me/api/portraits/women/2.jpg',
          details: 'Lorem ipsum dolor sit amet, empus,'
        },
        {
          id: 2,
          username: 'Jane Smith',
          image: 'https://randomuser.me/api/portraits/women/3.jpg',
          details: 'Pellentesque habitant morbi t sapien.'
        },
        {
          id: 3,
          username: 'Alice Johnson',
          image: 'https://randomuser.me/api/portraits/women/4.jpg',
          details: 'Nullam tincidunt nisl a nisi  vestibulum.'
        },
        {
          id: 4,
          username: 'Riya rax',
          image: 'https://randomuser.me/api/portraits/women/10.jpg',
          details: 'Nullam t nisi❤️ vestibulum.'
        },
      ];
  return (
    <View>
      <Text style={styles.headingText}>Users</Text>
      <View>
        {userData.map(({id, username , image , details}) => (
            <View key={id}>
                <View style={styles.container}> 
                    <Image src={image}  style={ styles.img}/>
                    <View>
                        <Text style={{color:'white',fontSize:20}}>{username}</Text>
                        <Text style={{color:'white'}}>{details}</Text>
                    </View>
                </View>
            </View>
        ))}
      </View>
    </View>
  )
}

export default Users

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    },
    img:{
        width:60,
        height:60,
        borderRadius: 60/ 2,
        marginHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#30336B',
        borderRadius:15,
        padding:8,
        marginVertical:4
    }

})