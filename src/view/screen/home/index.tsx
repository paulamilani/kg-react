/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useState } from 'react'
import {
  Button,
  Dialog,
  CheckBox
} from 'react-native-elements'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from '../../../componentes/header'

interface DialogComponentProps {}

const Dialogs: React.FunctionComponent<DialogComponentProps> = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [checked, setChecked] = useState(1)

  const toggleDialog1 = () => {
    setVisible1(!visible1)
  }
  const toggleDialog5 = () => {
    setVisible5(!visible5)
  }

  return (
    <View>
      <Header title="Home" view='home' />
      <View style={styles.buttonContainer}>
        <Button
          title="Como jogar"
          onPress={toggleDialog1}
          buttonStyle={styles.button}
        />

        <Button
          title="Nivel de dificuldade"
          onPress={toggleDialog5}
          buttonStyle={styles.button}
        />
        <Button
          title="Inicio"
          onPress={() => { alert('click') }}
          buttonStyle={styles.button}
        />
      </View>
      <Dialog
        isVisible={visible1}
        onBackdropPress={toggleDialog1}
      >
        <Dialog.Title title="Instruções"/>
        <Text>Aqui vai as regras do jogo!</Text>
      </Dialog>
      <Dialog
        isVisible={visible5}
        onBackdropPress={toggleDialog5}
      >
        <Dialog.Title title="Selecione a dificuldade"/>
        {['Fácil', 'Médio', 'Difícil'].map((l, i) => (
          <CheckBox
            key={i}
            title={l}
            containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked === i + 1}
            onPress={() => { setChecked(i + 1) }}
          />
        ))}

        <Dialog.Actions>
          <Dialog.Button
            title="SALVAR"
            onPress={() => {
              console.log(`Option ${checked} was selected!`)
              toggleDialog5()
            }}
          />
          <Dialog.Button title="CANCELAR" onPress={toggleDialog5} />
        </Dialog.Actions>
      </Dialog>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20
  },
  buttonContainer: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Dialogs
