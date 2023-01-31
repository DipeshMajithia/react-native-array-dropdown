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
