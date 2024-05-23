import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useLanguageStore } from '../stores/LanguageStore';

const LanguageForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const { addLanguage } = useLanguageStore();

  const handleSubmit = () => {
    addLanguage({ nombre });
    setNombre('');
  };

  return (
    <View>
      <TextInput value={nombre} onChangeText={setNombre} placeholder="Nombre del Lenguaje" />
      <Button title="Add Language" onPress={handleSubmit} />
    </View>
  );
};

export default LanguageForm;
