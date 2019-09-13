import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { setLightEstimationEnabled } from 'expo/build/AR';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function App() {


  const [resultText, setResultText] = useState('0')


  function buttonPressed(text) {
    console.log(text)
    handleResultChange(text)
    
  }
  function handleResultChange(text) {
    setResultText(resultText + text)
  }


  let rows = []
  let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
  for (let i = 0; i < 4; i++) {

    let row = []
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity style={styles.btn} onPress={() => buttonPressed(nums[i][j])}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
    }
    rows.push(<View style={styles.row}>{row}</View>)
  }

  let operations = ['+', '-', '*', '/']
  let ops = []
  for (let i = 0; i < 4; i++) {
    ops.push(<TouchableOpacity style={styles.btn}>
      <Text style={[styles.btnText, styles.white]}>{operations[i]}</Text>
    </TouchableOpacity>)
  }




  return (
    <View style={styles.root}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>121</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          {rows}
        </View>
        <View style={styles.operations}>
          {ops}
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',


  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'

  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'black'
  },
  calculationText: {
    fontSize: 24,
    color: 'white'
  },
  resultText: {
    fontSize: 30,
    color: 'white'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',

  },
  btnText: {
    fontSize: 30
  },
  white: {
    color: 'white'
  }



});
