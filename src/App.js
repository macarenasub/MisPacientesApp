import { AppLoading, registerRootComponent } from "expo";
import { Asset } from "expo-asset";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Block } from "./components";
import Navigation from "./navigation";

// import all used images
const images = [require("../assets/icons/back.png")];

function App(props) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={handleResourcesAsync}
        onError={(error) => console.warn(error)}
        onFinish={() => setIsLoadingComplete(true)}
      />
    );
  }

  return (
    <Block white>
      <Navigation />
    </Block>
  );
}

const styles = StyleSheet.create({});

export default registerRootComponent(App);
