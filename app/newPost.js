import { View, Text, TextInput, Pressable,Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";

const NewPost = () => {

    const router= useRouter()

    const[image,setImage]=useState("")
  const [text, setText] = useState("");

  const onPost = () => {
    console.warn("Post: ", text);
    setText("");
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ marginTop: 60, marginLeft: 20 }}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
         <Ionicons
              onPress={() => router.back()}
              name="arrow-back"
              size={28}
              color="black"
              style={{ alignItems: "center",marginLeft:-5 }}
            />
            <Text style={{fontWeight:'500',fontSize:20, marginLeft:10}}>New Post</Text>
            </View>
      <TextInput
        placeholder="Compose new post..."
        value={text}
        onChange={setText}
        multiline
        numberOfLines={5}
      />
      <View style={{marginVertical:15}}>
      <Ionicons name="image-outline" size={24} color="gray" onPress={pickImage} />
        </View>
        {image && <Image src={image} style={{width:'95%', aspectRatio:1}} />}
      <Pressable onPress={onPost}>
        <Text
          style={{
            color: "royalblue",
            fontSize: 18,
            alignSelf: "center",
            fontWeight: "500",
          }}
        >
          Post
        </Text>
      </Pressable>
    </View>
  );
};

export default NewPost;
