import React, {useState} from 'react';
import {ScrollView, Text, View, SafeAreaView,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  return (
    <>
      <ScrollView backgroundColor='#1b262c'
                  keyboardShouldPersistTaps='handled'
                  contentInsetAdjustmentBehavior='automatic' >
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>12</Text>
          </View>

          <View style={styles.inputContainer}>
          <TextInput style={styles.inputValue}
                     keyboardType='numeric'
                     placeholder='Enter the value'
                     placeholderTextColor='white'
          ></TextInput>
          </View>

          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map(currency=>(
              <TouchableOpacity key={currency} style={styles.convertButton}>
                <Text style={styles.text}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;


const styles = StyleSheet.create({
  container:{
    flex:1
  },

  resultContainer:{
    height:70,
    marginTop:15,
    borderWidth:2,
    borderColor:'#bbe1fa',
    justifyContent:'center',
    alignItems:'center'
  },

  resultValue:{
  fontSize:30,
  color:"#FFF",
  
  },
 
 inputContainer:{
   marginTop:20,
    height:70,
    borderColor:'#bbe1fa',
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center'
 },

 inputValue:{
   color:'#FFF',
   fontSize:30,
  textAlign:'center'
 },

 convertButtonContainer:{
   marginTop:10,
   flexDirection:'row',
   flexWrap:'wrap',
   alignItems:'center',
   justifyContent:'center'
 },

 convertButton:{
   alignItems:'center',
   justifyContent:'center',
   marginTop:10,
   width:'33.3%',
   height:100,
   borderWidth:2,
   borderColor:'#bbe1fa',
   backgroundColor:'#0f4c75'
 },

 text:{
   fontSize:15,
   color:'#fff',
   textAlign:'center'
 }
})