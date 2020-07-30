import React from 'react'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'
export default class TransactionScreen extends React.Component{
  constructor(){
    super()
      this.state={
        hascamerapermission:null,
        scanned:false,
        scanndata:'',
        buttonState:'normal' 
        
        
      }
    

    
  }
  getcamerapermission= async()=>{
   const {status} = await Permissions.askAsync(Permissions.CAMERA);
   this.setState({hascamerapermission:status==="granted",buttonState:'clicked',scanned:false})

    
     
  }
  handlebarcodescanner= async({type,data})=>{
    this.setState({scanned:true,buttonState:'normal',scanndata:data})
  }
   render(){
     const hascamerapermission = this.state.hascamerapermission; 
     const scanned = this.state.scanned
     const buttonState = this.state.buttonState
     if(buttonState==="clicked"&& hascamerapermission){
       return(
         <BarCodeScanner onBarCodeScanned = {scanned?undefined:this.handlebarcodescanner}
           style = {StyleSheet.absoluteFillObject}    />
        

         


       )
     }
     else if (buttonState=== 'normal'){

     
   return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
  <Text>{hascamerapermission===true? this.state.scanndata :'request camera permission'}</Text>
   <TouchableOpacity style={styles.scanbuttton} onPress ={this.getcamerapermission} >
    <Text style={styles.buttonText}> scan QR code </Text>
   </TouchableOpacity>
    </View>

   )
   }
   }


}

const styles = StyleSheet.create({
 scanbuttton:{
   backgroundColor:'green',
   margin:10

 },
 buttonText:{
   fontSize:20
 }
 
 

})