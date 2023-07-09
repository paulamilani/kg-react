import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

export default function Home() {
    return <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Start"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>

    <p></p>

    <View>
      
      <Button
        title="Resume"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>

    <p></p>

    <View>
      
      <Button
        title="Avatar"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  </SafeAreaView>

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});
