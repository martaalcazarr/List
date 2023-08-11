import React, {useState} from "react";
import { ScrollView, Text, View, TextInput, Button, StyleSheet, FlatList } from "react-native";
const TodoListScreen = () =>{ 

    const [todoListData, setTodoListData] = useState([]);
    const [todoText, setTodoText] = useState("");

    const handleChangeText = (text) =>{
        setTodoText(text);
    };

    const handleButtonPress = () =>{
        if(todoText.trim().length > 0){
            setTodoListData((value) => value.concat({text :todoText}));
            setTodoText("");
        }
    };

    const handleRenderListItem = ({item}) =>{
        return <Text>{item.text}</Text>
    };

    return(
        
            <ScrollView style={styles.container}>
            <View style={styles.viewContainer}>
                <View>
                    <TextInput 
                    placeholder="Write your To Do's" 
                    style={styles.textInput}
                    placeholderTextColor="#D7DBDD"
                    value={todoText}
                    onChangeText={handleChangeText}
                    />
                    <Button title="Add" style={styles.button} onPress={handleButtonPress}/>
                </View>
                <View>
                    <FlatList
                    data={todoListData}
                    renderItem={handleRenderListItem}
                    keyExtractor={(item) => item.text}
                    />
                </View>
                </View>
            </ScrollView>
      
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D0D3D4",
    },
    viewContainer: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 12,
        paddingRight: 12
    },
    textInput: {
        backgroundColor: "#FBFCFC",
        color: "#212121",
        fontSize: 16,
        marginBottom: 16
    }
});

export default TodoListScreen;