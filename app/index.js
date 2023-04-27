import { StyleSheet, View, FlatList } from "react-native";
import users from "../assets/data/users";
import UserCard from "../src/Components/UserCard";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <Link style={{alignSelf:'center',fontSize:24,fontWeight:'500',color:'royalblue'}} href={'/newPost'}>New Post</Link>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
  },
});
