import {Alert, View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import axios from 'axios';

const AddProductScreen = () => {
  const [name, setName] = useState('');
  const [unitPrice, setUnitPrice] = useState(0);
  const [unitsInStock, setUnitsInStock] = useState(0);
  const [quantityPerUnit, setQuantityPerUnit] = useState(0);

  const addData = () => {
    let data = {
      name: name,
      unitPrice: unitPrice,
      unitsInStock: unitsInStock,
      quantityPerUnit: quantityPerUnit,
    };
    axios.post('https://northwind.vercel.app/api/products', data).then(res => {
      Alert.alert('Başarılı', 'Ürün Başarılı Bir Şekilde Eklendi !');
      console.log(res);
    });
  };

  return (
    <View style={{padding: 20}}>
      <View style={{marginBottom: 15}}>
        <TextInput label="Ürün Adı" onChangeText={text => setName(text)} />
      </View>
      <View style={{marginBottom: 15}}>
        <TextInput
          label="Ürün Adedi"
          onChangeText={text => setQuantityPerUnit(parseInt(text))}
        />
      </View>
      <View style={{marginBottom: 15}}>
        <TextInput
          label="Ürün Stok Sayısı"
          onChangeText={text => setUnitsInStock(parseInt(text))}
        />
      </View>
      <View style={{marginBottom: 15}}>
        <TextInput
          label="Ürün Satış Fiyatı"
          onChangeText={text => setUnitPrice(parseInt(text))}
        />
      </View>
      <Button onPress={addData}>Ekle</Button>
    </View>
  );
};

export default AddProductScreen;
