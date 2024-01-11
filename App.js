import React, { useState } from 'react';
import { StatusBar, SafeAreaView, View, Text ,StyleSheet} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigations/Navigator";
const App = () => {
  const [statusBarStyle, setStatusBarStyle] = useState('dark-content');

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar animated={true}
       barStyle={statusBarStyle}
      />
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});
export default App;
