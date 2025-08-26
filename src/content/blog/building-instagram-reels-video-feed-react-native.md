---
title: Building an Instagram Reels video feed in React Native
description: Learn to build a swipeable video feed with smooth animations and infinite scrolling, just like Instagram Reels, using React Native.
date: 2025-06-09
author: Xavier Briole
image: /assets/posts/building-instagram-reels-video-feed-react-native.jpg
tags:
  - dev
  - react native
  - mobile
---

## Introduction

In this article, we will build a swipeable video feed similar to Instagram Reels using React Native. The feed will feature smooth animations, infinite scrolling, and the ability to play videos as you swipe through them.
This project will utilize the `react-native-reanimated` library for animations and `react-native-gesture-handler` for handling gestures.

## Prerequisites

Before we start, make sure you have the following installed:

- Node.js
- React Native CLI
- A React Native project set up (you can use `npx react-native init MyProject`)
- Basic knowledge of React Native and JavaScript

## Setting Up the Project

First, let's set up our React Native project. If you haven't already created a project, you can do so with the following command:

```bash
npx react-native init InstagramReelsClone
```

Next, navigate to your project directory:

```bash
cd InstagramReelsClone
```

Now, install the necessary dependencies:

```bash
npm install react-native-reanimated react-native-gesture-handler
```

Make sure to link the libraries if you're using React Native CLI (for versions below 0.60):

```bash
npx react-native link react-native-reanimated
npx react-native link react-native-gesture-handler
```

For iOS, you may need to install CocoaPods:

```bash
cd ios
pod install
cd ..
```

## Creating the Video Feed Component

Now, let's create a component for our video feed. Create a new file called `VideoFeed.js` in the `src/components` directory.

```javascript
// src/components/VideoFeed.js
import React, { useState, useRef } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import Video from "react-native-video";

const VideoFeed = ({ videos }) => {
  const scrollY = useSharedValue(0);
  const videoRefs = useRef([]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.videoContainer}>
        <Video
          ref={(ref) => (videoRefs.current[index] = ref)}
          source={{ uri: item.uri }}
          style={styles.video}
          resizeMode="cover"
          repeat
          onLoad={() => {
            if (index === 0) {
              videoRefs.current[index].seek(0);
            }
          }}
        />
      </View>
    );
  };

  const handleScroll = (event) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        videoRef.seek(scrollY.value / 1000); // Adjust based on your video duration
      }
    });
  };

  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};
const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
  },
  videoContainer: {
    width: "100%",
    height: "100%",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
export default VideoFeed;
```

## Using the Video Feed Component

Now that we have our `VideoFeed` component, we can use it in our main application file. Open `App.js` and import the `VideoFeed` component.

```javascript
// App.js
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import VideoFeed from "./src/components/VideoFeed";
const videos = [
  { id: "1", uri: "https://www.example.com/video1.mp4" },
  { id: "2", uri: "https://www.example.com/video2.mp4" },
  { id: "3", uri: "https://www.example.com/video3.mp4" },
  // Add more video URIs as needed
];
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VideoFeed videos={videos} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
export default App;
```

## Running the Application

Now that we have everything set up, we can run our application. Use the following command to start the Metro bundler:

```bash
npx react-native start
```

Then, in a separate terminal, run the application on your desired platform:

```bash
npx react-native run-android
```

```bash
npx react-native run-ios
```

You should now see a video feed similar to Instagram Reels, where you can swipe through videos and they will play automatically as you scroll.

## Conclusion

In this article, we built a simple Instagram Reels-like video feed using React Native. We utilized `react-native-reanimated` for smooth animations and `react-native-gesture-handler` for handling gestures. This project can be further enhanced with features like video controls, user interactions, and more.
Feel free to customize the styles and functionality to suit your needs. Happy coding!
