import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
const sticker1 = require('./assets/image/sticker_picture_01.jpg');
const sticker2 = require('./assets/image/sticker_picture_02.jpg');
const logo = require('./assets/image/Luv.png');

export default function App() {

  const { width, height } = useWindowDimensions();
  const layout = width <= 1320;
  const tablets = width <= 1000;
  const mobile = width <= 500;
  
  return (
    <View style={styles.container}>
      <View style={styles.love_title_container}>
        <Text style={(layout) ? styles.header_layout : styles.header_wrapper}>
          <Image source={logo} alt="로고" style={styles.logo} />
          <SimpleLineIcons
            name="menu"
            size={24}
            color="white"
            onPress={() => alert("menu")} />
        </Text>    
      </View>
      <View style={(tablets) ? styles.image_wrapper : styles.image_wrapper_row}>
        <Image source={sticker1} alt="배너 이미지1" style={(tablets) ? styles.image_width_100 : styles.image_width_50} />
        <Image source={sticker2} alt="배너 이미지2" style={(tablets) ? styles.image_width_100 : styles.image_width_50} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const { width, height } = Dimensions.get("window");

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
    backgroundColor: "#ffc7ef",
    color: "#fff",
    zIndex: 5
  },

  header_wrapper: {
    width: 1320,
    height: "100%",
    fontSize: 28,
    fontWeight: "800",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff"
  },

  header_layout: {
    width: "96%",
    height: "100%",
    fontSize: 28,
    fontWeight: "800",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff"
  },

  logo: {
    width: 134,
    height: 40,
    objectFit: "cover",
    pointerEvents: "auto"
  },

  image_wrapper: {
    width: "100%",
    height: height * 0.7,
  },

  image_wrapper_row: {
    width: "100%",
    height: height * 0.7,
    display: "flex",
    flexDirection: "row"
  },

  image_width_100: {
    width: "100%",
    height: "50%",
  },

  image_width_50: {
    width: "50%",
    height: "100%",
  },
});
