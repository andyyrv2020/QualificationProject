import React from 'react';
import QualificationList from './QualificationList';
import QualificationForm from './QualificationForm';
import QualificationEditForm from './QualificationEditForm';
import ThankYou from './ThankYou';
import QualificationDeleted from './QualificationDeleted';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './RootNavigation';
const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator initialRouteName='QualificationList'>
        <Stack.Screen name='QualificationList' component={QualificationList} options={{ title: 'Additional Qualifications and Courses' }} />
        <Stack.Screen name='QualificationForm' component={QualificationForm} options={{ title: 'Add' }} />
        <Stack.Screen name='QualificationEditForm' component={QualificationEditForm} options={{ title: 'Edit' }} />
        <Stack.Screen name='ThankYou' component={ThankYou} options={{ title: 'Thank You!' }} />
        <Stack.Screen name='QualificationDeleted' component={QualificationDeleted} options={{ title: 'Deleted' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
