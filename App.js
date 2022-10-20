import AppLoading from 'expo-app-loading';
import { View, ScrollView, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { useState } from 'react';
import Profiles from './assets/Profiles/index';
import Header from './app/components/header.js';
import Body from './app/components/body.js';
import Footer from './app/components/footer.js';

export default function App() {
  const [useLightMode, setUseLightMode] = useState(true);

  const changeMode = () => {
    setUseLightMode(useLightMode => !useLightMode)
  }

  const names = [];
  for (const key of Object.keys(Profiles)) {
    names.push(key);
  }
  
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={{ height: Dimensions.get('window').height }}>
      <Header useLightMode={useLightMode} changeMode={changeMode} />
      <ScrollView style={{ backgroundColor: useLightMode ? Themes.light.bg : Themes.dark.bg }}>
        <Body useLightMode={useLightMode}/>
      </ScrollView>
      <Footer useLightMode={useLightMode}/>
    </View>
  );
}
