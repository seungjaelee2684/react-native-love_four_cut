import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import sticker1 from './assets/image/sticker_picture_01.jpg';
import sticker2 from './assets/image/sticker_picture_02.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.love_title_container}>
        <Text style={styles.header_wrapper}>
          러브 카메라
          <SimpleLineIcons name="menu" size={24} color="white" />
        </Text>    
      </View>
      <View style={styles.image_wrapper}>
        <Image source={sticker1} style={{ width: "100%", height: "50%" }} />
        <Image source={sticker2} style={{ width: "100%", height: "50%" }} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 50
  },

  love_title_container: {
    width: "100%",
    height: 50,
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71f2b2",
    color: "#fff",
    zIndex: 5
  },

  header_wrapper: {
    width: "96%",
    height: "100%",
    fontSize: 28,
    fontWeight: "800",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff"
  },

  image_wrapper: {
    width: "100%",
    height: 500,
  }
});
