import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { styles } from "./styles";
import Trash from '../../assets/icons/trash.png';


export interface Task {
  id: number;
  name: string;
  done: boolean;
}

interface TasksItemProps {
  task: Task;
  //index: number;
  //toggleTaskDone: (id: number) => void;
  //removeTask: (id: number) => void;
  //editTask: (taskId: number, taskNewTitle: string) => void;
}

export function Task({ 
  name, 
  /*onRemove*/ 
}: TasksItemProps){

  const done = true;
  
  const [isEditing, setIsEditing] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (textInputRef.current) {
      if (isEditing) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  }, [isEditing]);

  function handleStartEditing() {
    return setIsEditing(true);
  }

  function handleCancelEditing() {
    //setNewTaskTitle(title);
    setIsEditing(false);
  }

  function handleSubmitEditing() {
    //editTask(id, newTaskTitle);
    setIsEditing(false);
  }
  
  return (
    <>
      <View style={styles.container}>
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.taskButton}
          //onPress={() => toggleTaskDone(id)}
        >
          <View style={done ? styles.taskMarkerDone : styles.taskMarker} >
            {done && <Icon name="check" size={12} color="#FFF" />}
          </View>
          <Text style={done ? styles.taskTextDone : styles.taskText}>
          {name}
        </Text>
        </TouchableOpacity>

        

        <TouchableOpacity
          style={styles.buttom}
        >
          <Image source={Trash}/>
        </TouchableOpacity>

      </View>
    </>
  );
}