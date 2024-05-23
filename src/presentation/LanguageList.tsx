import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useLanguageStore } from '../stores/LanguageStore';

const LanguageList: React.FC = () => {
  const { languages, fetchLanguages, removeLanguage } = useLanguageStore();

  useEffect(() => {
    fetchLanguages();
  }, []);

  return (
    <View>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.idlenguaje.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre}</Text>
            <Button title="Delete" onPress={() => removeLanguage(item.idlenguaje)} />
          </View>
        )}
      />
    </View>
  );
};

export default LanguageList;
