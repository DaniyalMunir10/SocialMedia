import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import users from "../../assets/data/users";
import posts from "../../assets/data/posts";
import Post from "../../src/Components/Post";
import { useState } from "react";
import UserProfileHeader from "../../src/Components/UserProfileHeader";
import { Entypo } from "@expo/vector-icons";

const ProfilePage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { id } = useSearchParams();
  const user = users.find((u) => u.id === id);

  if (!user) {
    return <Text>User not found</Text>;
  }
  if (!isSubscribed) {
    return (
      <View>
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />
        <View
          style={{
            backgroundColor: "gainsboro",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Entypo name="lock" size={50} color="gray" />
          <Text
            style={{
              backgroundColor: "royalblue",
             padding:15,
              borderRadius: 25,
              overflow: "hidden",
              height: 50,
              color:'white',
              margin:20
            
            }}
          >
            Subscribe to see the user's posts
          </Text>
        </View>
      </View>
    );
  }
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
      ListHeaderComponent={() => (
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />
      )}
    />
  );
};
const styles = StyleSheet.create({});

export default ProfilePage;
