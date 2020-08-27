import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Main from './screens/Main';
import Shop from './screens/Shop';
import Numbers from './screens/Numbers';



export default function App() {
  const [total, useTotal] = useState(0)
  const [slotOne, useSlotOne] = useState(1);
  const [operation, useOperation] = useState()
  const [slotTwo, useSlotTwo] = useState(1);
  const [showShop, useShowShop] = useState(false);
  const [showNumbers, useShowNumber] = useState(false);


  let content;

  if (showShop === false && showNumbers === false) {
    content = <Main slotOne={slotOne} slotTwo={slotTwo} total={total} useTotal={useTotal} useShowShop={useShowShop} useShowNumber={useShowNumber} />
  } else if (showShop === true) {
    content = <Shop total={total} useTotal={useTotal} useShowShop={useShowShop} />
  } else if (showNumbers === true) {
    content = <Numbers useShowNumber={useShowNumber} />
  }


  const equalPressed = () => {
    let slotTotal = slotOne + slotTwo;
    let prevTotal = total;
    let tempTotal = prevTotal + slotTotal;

    useTotal(tempTotal)
  }

  //setTimeout(() => equalPressed(), 2000)


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
