import React, { useState } from "react";
import {Text, Image, TextInput, Button, View, StyleSheet, Alert} from "react-native";

const LoginScreen = ({navigation}) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSignInPress = () =>{
        if (user.trim().length > 0 && password.trim().length > 0){
            if (user === "testuser" && password === "testpass"){
                navigation.navigate("Home")
            }else{
                Alert.alert("Error", "User or password are not correct");
                setPassword("");
                setUser("");
            }
        }
    };

    const handleUserTextChange = (text) => setUser(text);
    const handlePasswordTextChange = (text) => setPassword(text);

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                source={{
                    uri: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png"
                }}
                style={styles.image}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="User" 
                style={styles.textInput} 
                onChangeText={handleUserTextChange} 
                value={user}
                />
                <TextInput 
                placeholder="Password" 
                style={styles.textInput} 
                secureTextEntry 
                onChangeText={handlePasswordTextChange} 
                value={password}
                />
            </View>
            <Button 
            style={styles.button} 
            title="Sign in" 
            onPress={handleSignInPress}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        alignSelf: "center"
    },
    imageContainer:{
        marginTop: 10,
        marginBottom: 10
    },
    textInput:{
        backgroundColor: "#fff",
        padding: 6,
        marginTop: 4,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor: "#1972D2"
    },
    container:{
        flex: 1,
        justifyContent: "center",
        marginLeft: 18,
        marginRight: 18
    }
})
export default LoginScreen;