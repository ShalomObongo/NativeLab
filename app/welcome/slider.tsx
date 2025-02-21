// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, { useState } from "react";

import { router } from 'expo-router';


// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';


const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    router.replace('/auth/sign-in');
  };
  
  
  const onSkip = () => {
    router.replace('/auth/sign-in');;
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip
              from any slide or Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Reclaim African Heritage one word at a time',
    title: 'Afro Native',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Select Regions',
    text: 'All regions & What we Speak',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Discounted Lessons',
    text: 'Enjoy Great Lessons at discounted rates',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Best Teachers',
    text: ' Best Linguist on all Languages',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Paced Learning',
    text: 'Enjoy Learning at your pace no pressure 100%',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Trial Classes',
    text: ' Try out the classes firstbefore enrolment',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
];