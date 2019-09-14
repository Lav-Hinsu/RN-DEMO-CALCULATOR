import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { setLightEstimationEnabled } from 'expo/build/AR';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function App() {


  const [resultText, setResultText] = useState('')
  const [calculationText, setCalculationText] = useState('')

  function numberButtonPressed(text) {
    // console.log(text)

    if (text == '=/clr') {
      setResultText('')
      return calculateResult(resultText)
    }

    handleResultChange(text)
  }

  function validText(text){
    try{
    result=eval(text)

    }
    catch(e)
    {
      //console.log(e)
        setResultText(resultText)
        return false      
    }
  
    return true
  }


  function calculateResult() {
    setCalculationText('')
    const text = resultText
    if (validText(text)) {
      console.log(text)
      // BODMAS 
      console.log(eval(text))
      let ans = eval(text)
      setCalculationText(ans)
      return
    }
    else{
      setCalculationText('Error In Statement ')
    }
  }
  function handleResultChange(text) {
    setResultText(resultText + text )
  }

  function handleCalculationChange(text) {
    setCalculationText('')
    setCalculationText(calculationText + text)
  }
  function operate(operation) {

    switch (operation) {
      case 'DEL':
        if (resultText == '') return
        let text2 = resultText.split('')
        console.log(text2)
        text2.pop()
        setResultText(text2.join(''))
        break
      case '+':
        if (resultText == '') return
        setResultText(resultText + operation)
        break
      case '-':
        if (resultText == '') return
        setResultText(resultText + operation)
        break
      case '*':
        if (resultText == '') return
        setResultText(resultText + operation)
        break
      case '/':
        if (resultText == '') return
        setResultText(resultText + operation)
        break
    }
  }


  let rows = []
  let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=/clr']]
  for (let i = 0; i < 4; i++) {

    let row = []
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity key={nums[i][j]} style={styles.btn} onPress={() => numberButtonPressed(nums[i][j])}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
    }
    rows.push(<View key ={i} style={styles.row}>{row}</View>)
  }

  let operations = ['DEL', '/', '*', '+', '-']
  let ops = []
  for (let i = 0; i < 5; i++) {
    ops.push(<TouchableOpacity key={operations[i]}style={styles.btn} onPress={() => operate(operations[i])}>
      <Text style={[styles.btnText, styles.white]}>{operations[i]}</Text>
    </TouchableOpacity>)
  }




  return (
    <View style={styles.root}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calculationText}</Text>
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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'

  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343',
    
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#636363'
  },
  calculationText: {
    fontSize: 44,
    color: 'black'
  },
  resultText: {
    fontSize: 54,
    color: 'black'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',

  },
  btnText: {
    fontSize: 30,
    color:'white'
  },
  white: {
    color: 'white'
  }



});
