import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { styles } from "./styles";
import Trash from '../../assets/icons/trash.png';


export interface TaskProps {
  id: number;
  name: string;
  done: boolean;
}

interface TasksItemProps {
  task: TaskProps;
  //index: number;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function Task({ 
  task, 
  toggleTaskDone,
  removeTask,
}: TasksItemProps){

  return (
    <>
      <View style={styles.container}>
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => toggleTaskDone(task.id)}
        >
          <View style={task.done ? styles.taskMarkerDone : styles.taskMarker} >
            {task.done && <Icon name="check" size={12} color="#FFF" />}
          </View>
          <Text style={task.done ? styles.taskTextDone : styles.taskText}>
            {task.name}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => removeTask(task.id)}
        >
          <Image source={Trash}/>
        </TouchableOpacity>

      </View>
    </>
  );
}