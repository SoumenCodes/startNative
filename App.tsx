import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native'
import FlatCard from "./components/FlatCard";
import ElevatedCard from "./components/ElevatedCard";
import ShowCard from "./components/ShowCard";
import Users from "./components/Users";

const styles = StyleSheet.create({
  button: {backgroundColor:'purple', padding:5, borderRadius:5, marginTop:20},
  inputText: {
    fontSize:20
  },
});


function App() {
  return(
<SafeAreaView style={{margin:20, }}>
  <ScrollView>

  <View style={{display:'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(128, 0, 128, 0.1)',padding:20}}>
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
  <FlatCard/>
  <ElevatedCard/>
  <ShowCard/>
  <ShowCard/>
  <Users/>
  </ScrollView>

</SafeAreaView>)
  
}

export default App;