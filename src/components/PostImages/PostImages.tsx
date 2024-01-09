import React, { FC } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { PostImage as PostImagesTypes } from "../../types";

const PostImages: FC<PostImagesTypes> = ({ title, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <Text style={styles.date}>{date}</Text>

      <View style={styles.buttonContainer}>
        <Button title="View" color={"rgba(18,39,113,255)"}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color:"#fff",
    fontSize:18,
    fontWeight:"bold",
    marginBottom:12,

  },date:{
    color:"#fff",
  },buttonContainer:{
    alignItems:"flex-end",
  }
});

export default PostImages;
