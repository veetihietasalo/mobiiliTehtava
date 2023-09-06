import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button, TextInput, Text } from 'react-native';

export default function App() {
  const [ostos, setOstos] = useState('');
  const [ostoslista, setOstoslista] = useState([]);

  const lisaaOstos = () => {
    if (ostos.length > 0) {
      setOstoslista([...ostoslista, { key: Math.random().toString(), value: ostos }]);
      setOstos('');
    }
  };

  const tyhjennaLista = () => {
    setOstoslista([]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Syötä ostos"
          style={styles.inputField}
          onChangeText={setOstos}
          value={ostos}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add" onPress={lisaaOstos} />
          <Button title="Clear" onPress={tyhjennaLista} color="red" />
        </View>
      </View>
      <FlatList
        data={ostoslista}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputField: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%'
  },
  listItem: {
    padding: 5,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

