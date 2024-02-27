import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  button: {backgroundColor:'purple', padding:5, borderRadius:5, marginTop:20},
  inputText: {
    fontSize:20
  },
});


function App() {
  return(
<SafeAreaView style={{margin:20, }}>
  <View style={{display:'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(128, 0, 128, 0.1)',padding:30}}>
    <Text style={{ textAlign:'center', fontWeight:'900', color:'black', fontSize:40}}>Soumen Android</Text>
    <View>
      <TextInput style={styles.inputText} placeholder="Enter Name" />     
      <TextInput style={styles.inputText}  placeholder="Enter Email"/>
      <TextInput style={styles.inputText}  placeholder="Enter Phone" keyboardType='numeric'/>
      <TouchableOpacity style={styles.button}>
         <Text style={{color:'black', fontWeight:'bold', fontSize:15, textAlign:'center'}}>Submit</Text>
      </TouchableOpacity>
    </View>
   
  </View>
</SafeAreaView>)
  
}

export default App;