import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getLanguageById } from '../repositories/LanguageRepository';
import { Language } from '../models/Language';

const LanguageDetail: React.FC = () => {
  const route = useRoute();
  const { id } = route.params as { id: number };
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const fetchLanguage = async () => {
      const data = await getLanguageById(id);
      setLanguage(data);
    };
    fetchLanguage();
  }, [id]);

  return (
    <View>
      {language ? (
        <Text>{language.nombre}</Text>
      ) : (
        <Text>Cargando...</Text>
      )}
    </View>
  );
};

export default LanguageDetail;
