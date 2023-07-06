import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { tweets } from "../../data/tweets";
import Tweet from "../../components/Tweet";
import {View, Text, SafeAreaView, Button, FlatList, Image, Pressable, StyleSheet} from "react-native";
import Notifications from "./Notification";

export default function Feed(){

    // const navigation = useNavigation();

    // useLayoutEffect(()=>{
    //     navigation.setOptions({
    //         headerLeft:()=>(

    //         )
    //     })
    // })


    return (
        <SafeAreaView>
            <FlatList data={tweets.slice(0, 30)} keyExtractor={(item) =>{
                return item.id;
            }} 
            renderItem={({item}) =>{
                return <Tweet tweet={item}/>;
            }}
            >

            </FlatList>
        </SafeAreaView>
    )
}