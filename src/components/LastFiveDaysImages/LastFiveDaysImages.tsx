import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PostImage as PostImagesType } from "../../types";
import PostImages from "../PostImages";




const lastFiveDaysImages: FC<{postImages?:PostImagesType[]}> = ({postImages}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>

      <ScrollView style={styles.content}>
        {postImages?.map((postImage) => (
          <PostImages key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: "white",
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});
export default lastFiveDaysImages;
