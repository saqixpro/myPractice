import React, { FC, useState } from "react";
import { Alert, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, View, Text } from "react-native";

enum UICOlor {
  green = "rgba(0,255,0, 0.7)",
  blue = "rgba(0,0,255, 0.7)",
  red = "rgba(255,0,0, 0.7)",
  black = "rgba(0,0,0, 0.7)",
  white = "rgba(255,255,255, 0.7)",
}

interface IBox {
  size: number;
  color: UICOlor;
  text: string;
  completed?: boolean;
  index?: number;
  deleteItem?: (index: number) => void;
}

const Box: FC<IBox> = ({
  deleteItem,
  index,
  color,
  size = 50,
  text,
  completed,
}) => {
  return (
    <View
      style={{
        width: size * 3.4,
        height: size,
        backgroundColor: color,
        margin: 5,
        padding: 10,
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flex: 0.2, alignItems: "flex-end" }}>
        <TouchableOpacity onPress={() => deleteItem && deleteItem(index)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={completed && { textDecorationLine: "line-through" }}>
          {" "}
          {text}
        </Text>
      </View>
    </View>
  );
};

export default function App() {
  const [text, setText] = useState<string>("");

  const [data, setData] = useState<Array<IBox>>([
    {
      size: 100,
      color: UICOlor.red,
      text: "Random Text",
    },
  ]);

  const handleOnPress = () => {
    const result: IBox = {
      text,
      size: 100,
      color: UICOlor.green,
    };

    setData((prev) => [...prev, result]);

    setText("");
  };

  const handleDeleteItem = (index: number) => {
    setData((prev) => prev.filter((val, i) => index !== i));
  };

  // flex-box
  // useState
  // useEffect

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((value, index) => (
          <Box
            deleteItem={handleDeleteItem}
            index={index}
            text={value.text}
            size={value.size}
            color={value.color}
          />
        ))}
      </ScrollView>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholderTextColor={UICOlor.red}
          placeholder="Enter Item Title"
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity onPress={handleOnPress} style={styles.addBtn}>
          <Text>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 30,
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  input: {
    fontSize: 20,
    color: UICOlor.red,
    flex: 1,
  },
  inputWrapper: {
    flexDirection: "row",
    backgroundColor: UICOlor.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: UICOlor.black,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    alignItems: "center",
  },
  addBtn: {
    backgroundColor: "dodgerblue",
    width: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 3,
  },
});
