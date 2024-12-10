import React, {useState,useEffect} from 'react';
import { setupPlayer, addTrack } from '../musicPlayerService';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

import MusicPlayer from './screens/MusicPlayer';



function App(): React.JSX.Element {
  const[isPlayerReady, setIsPlayerReady] = useState<boolean>(false)


  async function setup() {
    let isSetup = await setupPlayer();

    if(isSetup){
      await addTrack();
    }
    setIsPlayerReady(isSetup);
  }

  useEffect(() => {
    setup()
  
  }, [])
  
  if (!isPlayerReady) {
    return(
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  return (
    <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <MusicPlayer />
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default App;
