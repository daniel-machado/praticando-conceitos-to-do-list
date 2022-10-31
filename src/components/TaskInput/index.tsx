import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Image } from 'react-native';

import iconAdd  from '../../assets/icons/plus.png';
import { styles } from './styles';

interface TaskInputProps {
  addTask: (task: string) => void;
}

export function TaskInput({ addTask }: TaskInputProps) {
  const [task, setTask] = useState('');
  const [activefocus, setActiveFocus] = useState(false);
  
  function handleAddNewTask() {
    if (task !== ''){
      addTask(task);
      setTask('');
    }
  }

  return (
    <View style={styles.form}>
        <TextInput
          style={activefocus ? styles.inputFocus : styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          returnKeyType="send"
          selectionColor="#5E60CE"
          onFocus={() => setActiveFocus(true)}
          value={task}
          onChangeText={setTask}
          onSubmitEditing={handleAddNewTask}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddNewTask}
        >  
          <Image source={iconAdd} />
        </TouchableOpacity>
    </View>
  )
}