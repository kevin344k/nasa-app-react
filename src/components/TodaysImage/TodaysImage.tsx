import React,{FC} from "react";
import { View, Text,StyleSheet,Image,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PostImage, RootStackParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps=NativeStackNavigationProp<RootStackParams,"Detail">



const TodaysImage: FC<PostImage> = ({date,title,url,explanation}) => {
  const {navigate}=useNavigation<PostImageNavigationProps>()
  const handleViewPress=()=>{
navigate("Detail" ,{title,date,url,explanation})
  }
  return (
    <View style={styles.container}>
      
        <Image source={{uri: url}} style={styles.image}></Image>
    
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}> 
      <Button title="View" color="#2C449D" onPress={handleViewPress}/>
      </View>
    </View>
  );
};



const styles=StyleSheet.create({
container:{
backgroundColor:"#2C449D",
marginVertical:8,
marginHorizontal:24,
borderRadius:32,
padding:16,
},
image:{
width:"100%",
height:190,
borderWidth:2,
borderColor:"white",
borderRadius:32,
},title:{
  color:"white",
  fontSize:20,
  margin:12,
  fontWeight:"bold",

},date:{
  color:"white",
  fontSize:16,
  margin:6,

},
buttonContainer:{
  alignItems:"flex-end",
  backgroundColor:"transparent",
}
})

export default TodaysImage;
