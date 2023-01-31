# react-native-customizable-array-dropdown

This library will take array as input and create a dropdown based on it.
More details and properties below: 

Properties: 
1) setSelectedValue (*Required)

code: 
```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue} />
        );
        
}
export default App;
```
2) data (*Required)

code: 
```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue} 
       
       
       data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}/>
        );
        
}
export default App;
```

3) initialTitle (Optional)

code: 
```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue} 
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
      
      
      initialTitle="Select Option"
      />
        );
        
}
export default App;
```


![Output For initialTitle](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/title.png)


4) mainView (Optional)

code: 
```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue} 
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        initialTitle="Select Option"
       
       
       mainView={{backgroundColor: 'skyblue', width: 300}}

      />
        );
        
}
export default App;
```


![Output For mainView](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/mainView.png)

5) titleStyle (Optional)

code: 
```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue} 
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        initialTitle="Select Option"
        mainView={{backgroundColor: 'skyblue', width: 300}}
       
       
       titleStyle={{fontSize: 20, color: 'yellow'}}


      />
        );
        
}
export default App;
```


![Output For titleStyle](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/titleStyle.png)

6) dropdownContainer (Optional)

code: 
```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue} 
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        initialTitle="Select Option"
        mainView={{backgroundColor: 'skyblue', width: 300}}
        titleStyle={{fontSize: 20, color: 'yellow'}}
        
        
        dropdownContainer={{
          backgroundColor: 'orange',
          alignSelf: 'center',
          width: 200,
        }}

      />
        );
        
}
export default App;
```


![Output For dropdownContainer](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/dropdownContainer.png)

7) dropdownItemContainer (Optional)

code: 
```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue} 
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        initialTitle="Select Option"
        mainView={{backgroundColor: 'skyblue', width: 300}}
        titleStyle={{fontSize: 20, color: 'yellow'}}
        dropdownContainer={{
          backgroundColor: 'orange',
          alignSelf: 'center',
          width: 200,
        }}
        
        
        dropdownItemContainer={{
          backgroundColor: 'magenta',
          borderRadius: 30,
        }}
      />
        );
        
}
export default App;
```


![Output For dropdownItemContainer](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/dropdownItemContainer.png)

8) dropdownItemText (Optional)

code: 
```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue} 
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        initialTitle="Select Option"
        mainView={{backgroundColor: 'skyblue', width: 300}}
        titleStyle={{fontSize: 20, color: 'yellow'}}
        dropdownContainer={{
          backgroundColor: 'orange',
          alignSelf: 'center',
          width: 200,
        }}
        dropdownItemContainer={{
          backgroundColor: 'magenta',
          borderRadius: 30,
        }}
        
        
        dropdownItemText={{color: 'white', fontSize: 20}}

      />
        );
        
}
export default App;
```


![Output For dropdownItemText](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/dropdownItemText.png)

9) dropdownSelectedItemContainer (Optional)

code: 
```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue} 
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        initialTitle="Select Option"
        mainView={{backgroundColor: 'skyblue', width: 300}}
        titleStyle={{fontSize: 20, color: 'yellow'}}
        dropdownContainer={{
          backgroundColor: 'orange',
          alignSelf: 'center',
          width: 200,
        }}
        dropdownItemContainer={{
          backgroundColor: 'magenta',
          borderRadius: 30,
        }}
        dropdownItemText={{color: 'white', fontSize: 20}}
        
        
        dropdownSelectedItemContainer={styles.fromStylesheet}

      />
        );
        
}
export default App;


const styles = StyleSheet.create({
  fromStylesheet: {backgroundColor: 'purple', justifyContent: 'center'},
});
```


![Output For dropdownSelectedItemContainer](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/dropdownSelectedItemContainer.png)

10) dropdownSelectedItemText (Optional)

code: 
```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue} 
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        initialTitle="Select Option"
        mainView={{backgroundColor: 'skyblue', width: 300}}
        titleStyle={{fontSize: 20, color: 'yellow'}}
        dropdownContainer={{
          backgroundColor: 'orange',
          alignSelf: 'center',
          width: 200,
        }}
        dropdownItemContainer={{
          backgroundColor: 'magenta',
          borderRadius: 30,
        }}
        
        dropdownSelectedItemText={{color: 'white', fontSize: 20}}

      />
        );
        
}
export default App;
```


![Output For dropdownSelectedItemText](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/dropdownSelectedItemText.png)
