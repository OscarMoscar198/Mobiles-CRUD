import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageList from './src/presentation/LanguageList';
import LanguageForm from './src/presentation/LanguageForm';
import LanguageDetail from './src/presentation/LanguageDetail';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Languages">
        <Stack.Screen name="Languages" component={LanguageList} />
        <Stack.Screen name="Add Language" component={LanguageForm} />
        <Stack.Screen name="Language Detail" component={LanguageDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
