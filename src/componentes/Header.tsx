/* eslint-disable @typescript-eslint/no-invalid-void-type */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Header as HeaderRNE } from 'react-native-elements';

interface HeaderComponentProps {
  title: string;
  view?: string;
}

interface ParamList {
  Detail: {
    openDrawer: void;
  };
}

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
  return (
    <HeaderRNE
      leftComponent={{}}
      rightComponent={{}}
      centerComponent={{ text: props.title, style: styles.heading }}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { Header };
