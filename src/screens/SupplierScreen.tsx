import {FlatList, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SupplierScreen = () => {
  const [suppliers, setSuppliers] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/suppliers').then(res => {
      setSuppliers(res.data);
    });
  }, []);
  return (
    <FlatList
      data={suppliers}
      renderItem={({item}) => (
        <Text
          style={[
            styles.text,
            item.address.country === 'USA' ? styles.textUSA : styles.textNotUSA,
          ]}>
          {item.companyName} - {item.address.country}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    height: 20,
  },
  textUSA: {
    color: 'red',
  },
  textNotUSA: {
    color: 'black',
  },
});

export default SupplierScreen;
