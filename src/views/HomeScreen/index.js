import React from "react";
import {Text, SafeAreaView, StyleSheet, View, Image} from "react-native";


const HomeScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
            <Image 
                source={{
                    uri: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png"
                }}
                style={styles.image}
                />
            </View> 
            <View style={styles.content}>
                <Text style={styles.title}>Welcome back!</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: "#63A4FF",
        height: 50,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: 12,
        paddingRight: 12
    },
    image: {
        width: 35,
        height: 35
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }, 
    title:{
        fontSize: 40
    }
})

export default HomeScreen;