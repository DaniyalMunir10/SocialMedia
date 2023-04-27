import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    Pressable,
  } from "react-native";
  import React from "react";
  import { useRouter, useSearchParams } from "expo-router";
  
  import { Ionicons, Feather } from "@expo/vector-icons";
  import { useState } from "react";
  
  const UserProfileHeader = ({user,isSubscribed,setIsSubscribed}) => {
  
    const router = useRouter();
  
    return (
      <View>
        <ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>
          <View style={styles.overlay} />
          <View style={{ marginTop: 40, padding: 10, flexDirection: "row" }}>
            <Ionicons
              onPress={() => router.back()}
              name="arrow-back"
              size={28}
              color="white"
              style={{ marginRight: 10, alignItems: "center" }}
            />
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "500",
                  marginBottom: 5,
                }}
              >
                {user.name}
              </Text>
              <Text style={{ color: "white" }}>
                1.4k Posts · 64.3k Likes · 12k Fans
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginTop: -50,
            }}
          >
            <Image src={user.avatar} style={styles.userImage} />
            <Feather name="share" size={24} color="royalblue" />
          </View>
          <Text style={{ fontSize: 20, fontWeight: "600", marginVertical: 5 }}>
            {user.name}
          </Text>
          <Text style={{ color: "gray", marginBottom: 10 }}>@{user.handle}</Text>
          <Text style={{ lineHeight: 20 }}>{user.bio}</Text>
          <Text style={{ color: "gray", marginTop: 20, fontWeight: "bold" }}>
            SUBSCRIPTION
          </Text>
  
          <Pressable
            style={[
              styles.button,
              { backgroundColor: isSubscribed ? "white" : "royalblue" },
            ]}
            onPress={() => setIsSubscribed(!isSubscribed)}
          >
            <Text style={[styles.buttonText,{color:isSubscribed?'royalblue':'white'}]}>
              {isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
            </Text>
            <Text style={[styles.buttonText,{color:isSubscribed?'royalblue':'white'}]}>
              {user.subscriptionPrice === 0
                ? "FOR FREE"
                : `$${user.subscriptionPrice}`}{" "}
              / Month
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    cover: {
      height: 200,
      width: "100%",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      ...StyleSheet.absoluteFillObject,
    },
    userImage: {
      width: 100,
      height: 100,
      borderRadius: 100,
      borderColor: "white",
      borderWidth: 3,
      marginRight: 30,
    },
    buttonText: {
      color: "royalblue",
      fontWeight: "600",
    },
    button: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "gainsboro",
      padding: 15,
      borderRadius: 50,
      justifyContent: "space-between",
      paddingHorizontal: 20,
      marginVertical: 10,
    },
  });
  
  export default UserProfileHeader;
  