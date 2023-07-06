import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Pressable, Text, View, StyleSheet} from "react-native";
// import TweetContent from "./TweetContent";

export default function Tweet({tweet}) {
    const { navigate } = useNavigation();
    return (
    //     <Pressable
    // //   onPress={() => {
    // //     navigate("TweetDetailScreen", { tweet });
    // //   }}
    // >
    //   <TweetContent tweet={tweet} />
    // </Pressable>

    // <TweetContent tweet={tweet} />

    <View className="bg-green-50"><Text >tweet.author</Text></View>
    
    )
}


const styles = StyleSheet.create({
       container: {
         color:"red",
         backgroundColor: "black",
       },
     });
