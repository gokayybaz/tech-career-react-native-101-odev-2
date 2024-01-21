import {FlatList, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card} from 'react-native-paper';

const SupplierScreen = () => {
  const [suppliers, setSuppliers] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/suppliers').then(res => {
      setSuppliers(res.data);
    });
  }, []);
  return (
    <>
      <FlatList
        style={{padding: 15}}
        data={suppliers}
        renderItem={({item}) => (
          <Card style={{marginBottom: 15}}>
            <Card.Content>
              <Text style={{fontWeight: 'bold'}}>{item.companyName}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </>
  );
};

export default SupplierScreen;
