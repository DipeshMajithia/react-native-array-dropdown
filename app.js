import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Dropdown from './ArrayDropdown';
import Icon from './caret-down.png';
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        mainView={{backgroundColor: 'white', width: 300}}
        touchOpacity={0.8}
        selectedText={{fontSize: 20, color: 'blue'}}
        dropdownContainer={{
          backgroundColor: 'orange',
          alignSelf: 'center',
          width: 200,
        }}
        imagePath={Icon} //example: import icon from './src/icons/caret-down.png';
        imageOptions={{backgroundColor: 'pink', borderRadius: 20}}
        dropdownItemContainer={{
          backgroundColor: 'magenta',
          borderRadius: 30,
        }}
        dropdownSelectedItemContainer={styles.fromStylesheet}
        dropdownItemText={{color: 'white', fontSize: 20}}
        dropdownSelectedItemText={{color: 'azure', fontSize: 20}}
      />

      <Text style={{color: 'black', fontSize: 20, marginTop: 20}}>
        Selected Value in Parent Component is: {selectedValue}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fromStylesheet: {backgroundColor: 'purple', justifyContent: 'center'},
});

export default App;
