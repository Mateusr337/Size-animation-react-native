import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [size] = useState(new Animated.Value(100));
  const [sizeInterpolate] = useState(new Animated.Value(0));

  const widthInterpolate = sizeInterpolate.interpolate({
    inputRange: [0, 1],
    outputRange: ["15%", "90%"],
  });

  const heightInterpolate = sizeInterpolate.interpolate({
    inputRange: [0, 1],
    outputRange: ["15%", "50%"],
  });

  const startSizeAnimation = () => {
    Animated.timing(size, {
      toValue: 350,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(size, {
        toValue: 100,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  const startSizeAnimationInterpolate = () => {
    Animated.timing(sizeInterpolate, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(sizeInterpolate, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Button title="start change size" onPress={startSizeAnimation} />
        <Animated.View
          style={{
            backgroundColor: "tomato",
            width: size,
            height: 100,
            marginTop: 30,
          }}
        />
      </View>

      <View style={styles.container}>
        <StatusBar style="auto" />

        <Button
          title="start change size"
          onPress={startSizeAnimationInterpolate}
        />
        <Animated.View
          style={{
            backgroundColor: "tomato",
            width: widthInterpolate,
            height: heightInterpolate,
            marginTop: 30,
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
