/* eslint-disable @typescript-eslint/no-invalid-void-type */
import React from 'react'
import {
  StyleSheet,
  View,
  Linking
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { type DrawerNavigationProp } from '@react-navigation/drawer'
import { Header as HeaderRNE, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface HeaderComponentProps {
  title: string
  view?: string
}

interface ParamList {
  Detail: {
    openDrawer: void
  }
}

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
  const navigation = useNavigation<DrawerNavigationProp<ParamList, 'Detail'>>()

  const docsNavigate = () => {
    void Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`)
  }

  const playgroundNavigate = () => {
    void Linking.openURL(`https://react-native-elements.js.org/#/${props.view}`)
  }

  return (
    <HeaderRNE
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: navigation.openDrawer
      }}
      rightComponent={
        (props.view != null) && (
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={docsNavigate}>
              <Icon name="description" color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={playgroundNavigate}
            >
              <Icon type="antdesign" name="rocket1" color="white" />
            </TouchableOpacity>
          </View>
        )
      }
      centerComponent={{ text: props.title, style: styles.heading }}
    />
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export { Header }
