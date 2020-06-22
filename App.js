import React,
{ useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      // 今はkey意外にもidで両方サポートされている
      { id: Math.random().toString(), value: goalTitle }
    ])
  }

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <GoalInput activeOpacity={0.8} onAddGoal={addGoalHandler}/>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData =>(
            <GoalItem onDelete={() => console.log('Does it work?')} title={itemData.item.value}/>
          )} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
