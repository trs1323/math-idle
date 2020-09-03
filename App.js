import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Main from './screens/Main';
import Shop from './screens/Shop';
import Numbers from './screens/Numbers';



export default function App() {
  const [total, useTotal] = useState(1000)
  const [slotOne, useSlotOne] = useState(1);
  const [operation, useOperation] = useState()
  const [slotTwo, useSlotTwo] = useState(0);
  const [showShop, useShowShop] = useState(false);
  const [showNumbers, useShowNumber] = useState(false);
  const [slotPressed, useSlotPressed] = useState();

  //numbers
  const [number0, setNumber0] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);
  const [number7, setNumber7] = useState(0);
  const [number8, setNumber8] = useState(0);
  const [number9, setNumber9] = useState(0);


  let content;

  if (showShop === false && showNumbers === false) {

    content = <Main
      slotOne={slotOne}
      slotTwo={slotTwo}
      total={total}
      useTotal={useTotal}
      useShowShop={useShowShop}
      useShowNumber={useShowNumber}
      useSlotPressed={useSlotPressed} />
  } else if (showShop === true) {

    content = <Shop
      total={total}
      useTotal={useTotal}
      useShowShop={useShowShop}
      setNumber0={setNumber0}
      setNumber1={setNumber1}
      setNumber2={setNumber2}
      setNumber3={setNumber3}
      setNumber4={setNumber4}
      setNumber5={setNumber5}
      setNumber6={setNumber6}
      setNumber7={setNumber7}
      setNumber8={setNumber8}
      setNumber9={setNumber9}
      number0={number0}
      number1={number1}
      number2={number2}
      number3={number3}
      number4={number4}
      number5={number5}
      number6={number6}
      number7={number7}
      number8={number8}
      number9={number9}
    />
  } else if (showNumbers === true) {

    content = <Numbers
      useShowNumber={useShowNumber}
      useSlotOne={useSlotOne}
      useSlotTwo={useSlotTwo}
      slotPressed={slotPressed}
      number0={number0}
      number1={number1}
      number2={number2}
      number3={number3}
      number4={number4}
      number5={number5}
      number6={number6}
      number7={number7}
      number8={number8}
      number9={number9}
      setNumber0={setNumber0}
      setNumber1={setNumber1}
      setNumber2={setNumber2}
      setNumber3={setNumber3}
      setNumber4={setNumber4}
      setNumber5={setNumber5}
      setNumber6={setNumber6}
      setNumber7={setNumber7}
      setNumber8={setNumber8}
      setNumber9={setNumber9}
    />
  }


  const equalPressed = () => {
    let slotTotal = slotOne + slotTwo;
    let prevTotal = total;
    let tempTotal = prevTotal + slotTotal;

    useTotal(tempTotal)
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282929',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  total: {
    flexDirection: 'row',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 10
  },
  math: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 'auto',
    width: '50%'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Teko_400Regular',
  },
  equalButton: {
    borderColor: '#757575',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white'
  }
});
